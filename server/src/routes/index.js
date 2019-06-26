var router = require('express').Router();
var { sequelizeQueryData } = require('../helpers');

router.use('/api/v1', sequelizeQueryData, require('./api'));

module.exports = router;