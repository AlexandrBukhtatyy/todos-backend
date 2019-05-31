require('dotenv').config();

const {
  APP_DB_USER,
  APP_DB_PASS,
  APP_DB_NAME,
  APP_DB_HOST
} = process.env;

module.exports = {
  "development": {
    "username": "root",
    "password": "secret",
    "database": "todos",
    "host": "database",
    "dialect": "mysql"
  },
  "test": {
    "username": APP_DB_USER,
    "password": APP_DB_PASS,
    "database": APP_DB_NAME,
    "host": APP_DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": APP_DB_USER,
    "password": APP_DB_PASS,
    "database": APP_DB_NAME,
    "host": APP_DB_HOST,
    "dialect": "mysql"
  }
}
