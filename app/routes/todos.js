var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('GET /todos');
});

router.get('/:id', function (req, res) {
    res.send(`GET /todos/${req.params.id}`);
});

router.post('/', function (req, res) {
    res.send('POST /todos');
});

router.put('/', function (req, res) {
    res.send('PUT /todos');
});

router.delete('/:id', function (req, res) {
    res.send('DELETE /todos');
});

module.exports = router;