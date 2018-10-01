require('dotenv').load();
var todosRoutes = require('./routes/todos');
var userRoutes = require('./routes/user');
var express = require('express');
var app = express();


app.use('/api/v1/todos', todosRoutes);
app.use('/api/v1/user', userRoutes);

app.get('/api/v1/', function (req, res) {
    res.send(`hello world!! (${process.env.APP_NAME})`);
})


app.listen(process.env.APP_PORT, function () {
    console.log(`app listening on port ${process.env.APP_PORT}!`);
})
