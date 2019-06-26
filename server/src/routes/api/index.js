var router = require('express').Router();
var { auth } = require('../../helpers');


router.use('/user', require('./user'));
router.use('/todos', auth, require('./todos'));

module.exports = router;
