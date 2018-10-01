require('dotenv').load();
var express = require('express');
var app = express();
var APP_PORT = process.env.APP_PORT || 8080;

app.get('/', function (req, res) {
    res.send(`hello world!! from: ` + process.env.APP_NAME);
})

app.listen(APP_PORT, function () {
    console.log(`app listening on port ${APP_PORT}!`);
})
