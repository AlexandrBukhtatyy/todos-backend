require('dotenv').load();
var mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 100,
    host: process.env.APP_DB_HOST,
    user: process.env.APP_DB_USER,
    password: process.env.APP_DB_PASS,
    database: process.env.APP_DB_NAME,
    port: process.env.APP_DB_PORT,
    debug: false,
    multipleStatements: true
});

module.exports.connection = connection;