const redis = require('redis');
const connectRedis = require('connect-redis');
const session = require('express-session');

// Initially gotta create a redis store
const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
    host: 'localhost',
    port: 6397
})

redisClient.on('error', function (err) {
    console.error('Could not connect to redis ', err);
})

redisClient.on('connect', function () {
    console.log("Connected to redis successfully");
})


module.exports = {
    redisClient,
    RedisStore,
    session
}