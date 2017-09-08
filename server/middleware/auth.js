const session = require('express-session');
const RedisStore = require('connect-redis')(session);
var url = require('url');
const redisClient = require('redis').createClient(process.env.REDIS_URL || '');

if (process.env.REDIS_URL){
  var redisURL = url.parse(process.env.REDIS_URL).hostname;
}

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports.logged = (req, res, next) => {
  //console.log('session: ', req.session);
  /*
  { id: 1,
  first: 'Guillaume Choupeaux',
  last: 'Gui_Choupeaux',
  display: 'Guillaume Choupeaux',
  email: 'gchoupeaux@gmail.com',
  phone: null,
  created_at: 2017-09-06T03:09:04.823Z,
  updated_at: 2017-09-06T03:09:04.823Z,
  rating: null,
  rating_count: null,
  cookie: null,
  total_view: null,
  gyms: null,
  avg_price: null,
  qualification: null,
  biography: null,
  goals: null }
  */

  if (req.isAuthenticated()) {
    return next();
  }
  res.status(200).send({message: false});
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: redisURL || 'localhost',
    port: 6379
  }),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});

