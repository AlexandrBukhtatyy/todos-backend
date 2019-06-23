const config = require('./config');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');

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

const sequelizeQueryData = function (req, res, next) {
    req.sequelizeQueryData = {
        ...(req.query.offset && {offset: req.query.offset}),
        ...(req.query.limit && {limit: req.query.limit}),
        order: [
            // ...(req.query.sort && {sort: req.query.sort}),
        ],
        // TODO: доработать что бы можно было использовать операторы типа Sequelize.Op.or
        ...(req.query.filter && {where: Object.keys(req.query.filter).forEach((filterKey) => {
            const newValue = { [filterKey]: req.query.filter[filterKey] };
        })})
    }
    next();
}

module.exports = {
    throwError,
    auth,
    sequelizeQueryData
};
