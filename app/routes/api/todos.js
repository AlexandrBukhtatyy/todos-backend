var database = require('../../database/database');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var appData = {};
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData['error'] = 1;
            appData['data'] = 'Internal Server Error';
            res.status(500).json(appData);
        } else {
            connection.query('SELECT * FROM `todos`', function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData['data'] = rows;
                    res.status(200).json(appData);
                } else {
                    appData['data'] = 'Error Occured!';
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});

router.get('/:id', function (req, res) {
    var appData = {};
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData['error'] = 1;
            appData['data'] = 'Internal Server Error';
            res.status(500).json(appData);
        } else {
            connection.query(`SELECT * FROM \`todos\` WHERE id=${req.params.id}`, function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData['data'] = rows[0];
                    res.status(200).json(appData);
                } else {
                    appData['data'] = 'Error Occured!';
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
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