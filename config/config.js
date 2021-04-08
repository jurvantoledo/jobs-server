require("dotenv").config(); // we configure dotenv
module.exports = {
  development: {
    url: "postgres://heuqqxgm:aiMxnr7M9tjHrwjnpAKqPsp3NyMohhU-@suleiman.db.elephantsql.com:5432/heuqqxgm",
    dialect: "postgres",
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false
      },
    },
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