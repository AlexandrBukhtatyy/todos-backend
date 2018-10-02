require('dotenv').load();
var bodyParser = require('body-parser');
var config = require('./config');
var express = require('express');
var routes = require('./routes');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.get('/', function (req, res) {
    res.send(`hello world!!! (${config.NAME})`);
})

app.listen(config.PORT, function () {
    console.log(`app listening on port ${config.PORT}!`);
})
