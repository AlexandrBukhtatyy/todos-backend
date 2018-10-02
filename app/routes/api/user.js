var express = require('express');
var database = require('../../config/database');
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
    var today = new Date();
    var userData = {
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'email': req.body.email,
        'password': req.body.password,
        'created': today
    }
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
});

module.exports = router;