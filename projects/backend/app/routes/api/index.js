var config = require('../../config');
var router = require('express').Router();
var jwt = require('jsonwebtoken');

var auth = function (req, res, next) {
    if (req.headers['authorization']) {
        if (jwt.verify(req.headers['authorization'].replace(/^Bearer\s/, ''), config.APP_SECRET)) {
            // CORRECT JWT Token
            next();
        } else {
            // INCORRECT JWT Token
            next();
        }
    } else {
        // NOT FOUND Authorization-header
        next();
    }
}

router.use('/user', require('./user'));
router.use('/todos', auth, require('./todos'));

module.exports = router;