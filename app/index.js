require('dotenv').load();
var routes = require('./routes');
var userRoutes = require('./routes/api/user');
var express = require('express');
var app = express();


app.use('/', routes);

app.get('/', function (req, res) {
    res.send(`hello world!! (${process.env.APP_NAME})`);
})


app.listen(process.env.APP_PORT, function () {
    console.log(`app listening on port ${process.env.APP_PORT}!`);
})
