require("dotenv").config(); // we configure dotenv
module.exports = {
  development: {
    url: process.env.ELEPHANT_SQL, // and use the env vars to get the url
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    use_env_variable: "ELEPHANT_SQL",
  },
};

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.ELEPHANT_SQL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});