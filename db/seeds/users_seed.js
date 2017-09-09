const models = require('../models');
var mockData = require('./mock_data');


exports.seed = function (knex, Promise) {

  // delete all rows
  return models.Profile.where('id', '!=', '0').destroy()
    .then(models.Auth.where('id', '!=', '0').destroy())

    // write all object 
    .then( () =>(Promise.each( mockData, el => {  
      //console.log(el.profile.first);
      return models.Profile.forge(el.profile).save()
        .then((profile) => {
          el.auth.profile_id = profile.get('id');
          return models.Auth.forge(el.auth).save();
        })
        .catch((error) => {
          console.log(error);
        });
    })));
};





/*
exports.seed = function (knex, Promise) {

  return models.Profile.where({ email: 'admin@domain.com' }).fetch()
    .then((profile) => {
      if (profile) {
        throw profile;
      }
      return models.Profile.forge({
        first: 'System',
        last: 'Admin',
        display: 'Administrator',
        email: 'admin@domain.com'
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: 'admin123',
        profile_id: profile.get('id')
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })
    .catch(() => {
      console.log('WARNING: defualt user already exists.');
    });

};

*/
