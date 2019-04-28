var database = require('../../config/database');
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
    var today = new Date();
    var todoData = {
        'author': req.body.author,
        'title': req.body.title,
        'text': req.body.text,
        'status': req.body.status,
        'created': today
    }
    var appData = {};
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData['error'] = 1;
            appData['data'] = 'Internal Server Error';
            res.status(500).json(appData);
        } else {
            connection.query(`INSERT INTO todos SET ? `, todoData, function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData['data'] = 'Todo registered successfully!';
                    res.status(201).json(appData);
                } else {
                    appData['data'] = 'Error Occured!';
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});

router.put('/:id', function (req, res) {
    var todoData = {
        'author': req.body.author,
        'title': req.body.title,
        'text': req.body.text,
        'status': req.body.status
    }
    var collsForUpdating = [];
    for(attr in todoData) {
        if (todoData[attr]) {
            collsForUpdating.push(`${attr} = '${todoData[attr]}'`);
        }
    }
    var appData = {};
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData['error'] = 1;
            appData['data'] = 'Internal Server Error';
            res.status(500).json(appData);
        } else {
            connection.query(`UPDATE todos SET ${collsForUpdating.join(' ,')} WHERE id=${req.params.id}`, function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData['data'] = 'Todo updated successfully!';
                    res.status(201).json(appData);
                } else {
                    appData['data'] = 'Error Occured!';
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});

router.delete('/:id', function (req, res) {
    var appData = {};
    database.connection.getConnection(function (err, connection) {
        if (err) {
            appData['error'] = 1;
            appData['data'] = 'Internal Server Error';
            res.status(500).json(appData);
        } else {
            connection.query(`DELETE FROM todos WHERE id=${req.params.id}`, function (err, rows, fields) {
                if (!err) {
                    appData.error = 0;
                    appData['data'] = 'Todo deleted successfully!';
                    res.status(201).json(appData);
                } else {
                    appData['data'] = 'Error Occured!';
                    res.status(400).json(appData);
                }
            });
            connection.release();
        }
    });
});

module.exports = router;
