var express = require('express');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('../../config');
var router = express.Router();
var throwError = require('../../helpers');
var models = require("../../models");

router.get('/wim', function (req, res) {
    res.send('GET /who-i-am');
});

router.post('/login', function (req, res) {
    // Проверить на наличие записи в бд
    models.User.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        // Сверить пароль в бд и пароль переданный пользователем
        const formLoginHash = crypto.createHmac('sha256', config.APP_SECRET).update(req.body.password).digest('hex');
        if (user.password === formLoginHash) {
            const access_token = jwt.sign({ userId: user.id }, config.APP_SECRET);
            res.status(201).json({token: access_token});
        } else {
            throwError(500, '--', '--');
        }
    }).catch((error) => {
        // throwError(500, '--', '--');
    }) 
});

router.get('/logout', function (req, res) {
    res.send('GET /logout');
});

router.post('/register', function (req, res) {
    const userData = { 
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        password: crypto.createHmac('sha256', config.APP_SECRET)
        .update(req.body.password)
        .digest('hex')
     };

     models.User.findOrCreate({where: {email: userData.email}, defaults: {...userData}})
    .then(([user, created]) => {
        if (created) {
            res.status(201).json(user);
        } else {
            res.status(200).json('sorry');
        }
    }).catch(() => {
        throwError(500, 'Internal Server Error', 'Internal Server Error');
    })
});

module.exports = router;
