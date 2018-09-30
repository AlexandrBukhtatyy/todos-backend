var express = require('express');
var app = express();
var APP_PORT = 8080;

app.get('/', function (req, res) {
    //safsf
    res.send(`hello world!!`);
})

app.listen(APP_PORT, function () {
    console.log(`app listening on port ${APP_PORT}!`);
})
