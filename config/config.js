require("dotenv").config(); // we configure dotenv
module.exports = {
  development: {
    url: "postgres://heuqqxgm:aiMxnr7M9tjHrwjnpAKqPsp3NyMohhU-@suleiman.db.elephantsql.com:5432/heuqqxgm",
    dialect: "postgres",
    "operatorsAliases": "0"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    "operatorsAliases": "0"
  },
  production: {
    use_env_variable: "DATABASE_URL",
  },
};

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
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