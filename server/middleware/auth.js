const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('redis').createClient();

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};


//const REDISCLOUD_URL = process.env.REDISCLOUD_URL || 'redisClient:more laughter, more love, more life@localhost:19753';


module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: 'localhost',
    port: 6379
  }),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});


// var url = require('url');
// var redis = require('redis');

// var redisURL = url.parse(process.env.REDISCLOUD_URL);
// var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});


//the username, password, hostname and port
//http://rediscloud:password@hostname:port

// redis://rediscloud:GWLCubqhbiowKlUN@redis-19753.c10.us-east-1-4.ec2.cloud.redislabs.com:19753

//username  redis://rediscloud
//password  GWLCubqhbiowKlUN
//hostname  redis-19753.c10.us-east-1-4.ec2.cloud.redislabs.com
//port      19753


// var redis = require('redis');
// var client = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});