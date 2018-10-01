var express = require('express');
var database = require('../database/database');
var router = express.Router();

router.get('/wim', function (req, res) {
    res.send('GET /who-i-am');
});

router.post('/login', function (req, res) {
    res.send('post /login');
});

router.get('/logout', function (req, res) {
    res.send('GET /logout');
});

router.post('/register', function (req, res) {
    var appData = {};
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData['error'] = 1;
            appData['data'] = 'Internal Server Error';
            res.status(500).json(appData);
        } else {
            connection.query(`INSERT INTO users SET ? `, userData, function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData['data'] = 'User registered successfully!';
                    res.status(201).json(appData);
                } else {
                    appData['data'] = 'Error Occured!';
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
    // res.send('post /register');
});

module.exports = router;