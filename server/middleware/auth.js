const session = require('express-session');
const RedisStore = require('connect-redis')(session);
var url = require('url');
const redisClient = require('redis').createClient(process.env.REDIS_URL || '');

var redisURL = url.parse(process.env.REDIS_URL);

console.log('redisUrl: ', redisURL);

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: redisURL.hostname || 'localhost',
    port: 6379
  }),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});

