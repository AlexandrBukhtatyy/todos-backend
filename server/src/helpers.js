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
    if (req.headers['authorization']) {
        const token = req.headers['authorization'].split(' ')[1] || null;
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
        ...(req.query.offset && { offset: parseInt(req.query.offset) }),
        ...(req.query.limit && { limit: parseInt(req.query.limit) }),
        ...(req.query.sort && {
            order: req.query.sort.split(',').map((param) => {
                var attr = param;
                var order = 'ASC';
                if (attr.match(/^\-/)) {
                    order = 'DESC';
                    attr = param.slice(1);
                }
                if (attr.match(/^\+/)) {
                    attr = param.slice(1);
                }
                return [attr, order]
            })
        }),
        // TODO: доработать что бы можно было использовать операторы типа Sequelize.Op.or
        // ...(req.query.filter && {where: Object.keys(req.query.filter).forEach((filterKey) => {
        //     const newValue = { [filterKey]: req.query.filter[filterKey] };
        // })})
    }
next();
}

module.exports = {
    throwError,
    auth,
    sequelizeQueryData
};
