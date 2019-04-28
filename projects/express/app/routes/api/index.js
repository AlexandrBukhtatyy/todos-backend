var config = require('../../config');
var router = require('express').Router();
var jwt = require('jsonwebtoken');

var auth = function (req, res, next) {
    var token = req.headers['authorization'].split(' ')[1] || null ;
    if (token && jwt.verify(token, config.APP_SECRET)) {
        // CORRECT JWT Token
        next();
    } else {
        // INVALID JWT Tokens
        res.status(500).json({error:'login is required'});
    }
}

router.use('/user', require('./user'));
router.use('/todos', auth, require('./todos'));

module.exports = router;