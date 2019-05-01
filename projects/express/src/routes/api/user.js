var express = require('express');
var crypto = require('crypto');
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var config = require('../../config');
var database = require('../../config/database');
var router = express.Router();
var throwError = require('../../helpers');

router.get('/wim', function (req, res) {
    res.send('GET /who-i-am');
});

router.post('/login', function (req, res) {
    
    // Проверить на наличие записи в бд
    database.connection.getConnection(function (err, connection) {
        var appData = {};
        if (err) {
            throwError(500, 'Internal Server Error', 'Internal Server Error');
        }
            // Проверяем пользователя с указаным email в БД
        connection.query(`SELECT * FROM users WHERE email='${req.body.email}'`, function (err, rows, fields) {
            if (err) {
                throwError(500, 'Internal Server Error', 'Internal Server Error');
            }
            // Сверить пароль в бд и пароль переданный пользователем
            let formLoginHash = crypto.createHmac('sha256', config.APP_SECRET).update(req.body.password).digest('hex')
            if (rows[0].password == formLoginHash) {
                var access_token = jwt.sign({ userId: rows[0].id }, config.APP_SECRET);
                appData.error = 0;
                appData['data'] = {access_token: access_token};
                res.status(201).json(appData);
            } else {
                throwError(500, 'Internal Server Error', 'Internal Server Error');                        
            }
            });
            connection.release();
    });    
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
        'password': crypto.createHmac('sha256', config.APP_SECRET)
            .update(req.body.password)
            .digest('hex'),
        'created': today
    }

    var appData = {};
    
    database.connection.getConnection(function (err, connection) {
        if (err) {
            throwError(500, 'Internal Server Error', 'Internal Server Error');
        } else {
            connection.query(`INSERT INTO users SET ? `, userData, function (err, rows, fields) {
                if (err) {
                    throwError(500, 'Internal Server Error', 'Internal Server Error');
                }
                appData.error = 0;
                appData['data'] = 'User registered successfully!';
                res.status(201).json(appData);
            });
            connection.release();
        }
    });
});

module.exports = router;
