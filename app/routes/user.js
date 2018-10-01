var express = require('express');
var router = express.Router();

router.get('/wim', function (req, res) {
    res.send('GET /who-i-am');
});

router.post('/login', function (req, res) {
    res.send('post /login');
});

router.get('/logout', function (req, res) {
    res.send('GET /logout');
});

router.post('/register', function (req, res) {
    res.send('post /register');
});

module.exports = router;