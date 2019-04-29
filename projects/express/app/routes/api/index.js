var config = require('../../config');
var router = require('express').Router();
var jwt = require('jsonwebtoken');
var throwError = require('../../helpers');

var auth = function (req, res, next) {
    if(req.headers['authorization']) {
        var token = req.headers['authorization'].split(' ')[1] || null ;
        if (token && jwt.verify(token, config.APP_SECRET)) {
            next();
        } else {
            throwError(400, 'Invalid JWT', 'Invalid JWT token. The token is expired');
        }
    } else {
        throwError(401, 'Missing Header', 'authorization header is missing');
    }
}

router.use('/user', auth, require('./user'));
router.use('/todos', auth, require('./todos'));

module.exports = router;
