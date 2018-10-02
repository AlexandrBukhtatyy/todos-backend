var mysql = require('mysql');
var config = require('./index');

var connection = mysql.createPool({
    connectionLimit: 100,
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_NAME,
    port: config.DB_PORT,
    debug: false,
    multipleStatements: true
});

module.exports.connection = connection;