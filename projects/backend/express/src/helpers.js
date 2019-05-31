var config = require('./config');
var jwt = require('jsonwebtoken');

const throwError = function (status, code, message) {
    const error = new Error(message);
    error.name = '';
    error.status = status;
    error.code = code;
    throw error;
}

const auth = function (req, res, next) {
    if(req.headers['authorization']) {
        const token = req.headers['authorization'].split(' ')[1] || null ;
        if (token && jwt.verify(token, config.APP_SECRET)) {
            next();
        } else {
            throwError(400, 'Invalid JWT', 'Invalid JWT token. The token is expired');
        }
    } else {
        throwError(401, 'Missing Header', 'authorization header is missing');
    }
}

module.exports = {
    throwError,
    auth
};
