require('dotenv').load();
var bodyParser = require('body-parser');
var express = require('express');
var config = require('./config');
var routes = require('./routes');

var app = express();

var JWTRedisSession = require("jwt-redis-session");
var redis = require("redis");

var redisClient = redis.createClient(config.REDIS_PORT, config.REDIS_HOST);
var secret = config.APP_SECRET;
/*
    redisClient.on("error", function (err) {
        console.log("Error " + err);
    });
    redisClient.set("some key", "some val - 1");
    redisClient.get("some key", function (err, reply) {
        // reply is null when the key is missing
        console.log(reply);
    });
    redisClient.set("string key", "string val", redis.print);
    redisClient.hset("hash key", "hashtest 1", "some value", redis.print);
    redisClient.hset(["hash key", "hashtest 2", "some other value"], redis.print);
    redisClient.hkeys("hash key", function (err, replies) {
        console.log(replies.length + " replies:");
        replies.forEach(function (reply, i) {
            console.log("    " + i + ": " + reply);
        });
        redisClient.quit();
    });
*/
/*
app.use(JWTRedisSession({
    client: redisClient,
    secret: secret,
    keyspace: "sess:",
    maxAge: 86400,
    algorithm: "HS256",
    requestKey: "jwtSession",
    requestArg: "jwtToken"
}));*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.get('/', function (req, res) {
    res.send(`hello world!!! (${config.NAME})`);
})

app.listen(config.PORT, function () {
    console.log(`app listening on port ${config.PORT}!`);
})
