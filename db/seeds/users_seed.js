const models = require('../models');

var mockData = require('./mock_data');
var services = require('./services');
var services_join = {};


exports.seed = function (knex, Promise) {

  var services_ids = [];
  var profiles_ids = [];


  // delete all
  return models.ServiceJoin.where('id', '!=', '0').destroy()
    .then(models.Service.where('id', '!=', '0').destroy())
    .then(models.Auth.where('id', '!=', '0').destroy())
    .then(models.Payment.where('id', '!=', '0').destroy())
    .then(models.BankAccount.where('id', '!=', '0').destroy())
    .then(models.Profile.where('id', '!=', '0').destroy())
    
    
    // write services table
    .then( () =>(Promise.each( services, el => {  
      //console.log(el.profile.first);
      return models.Service.forge(el.service).save()
        .then((service) => {

          // array of services id to build the join table
          services_ids.push(service.get('id'));
        })
        .catch((error) => {
          console.log(error);
        });
    })))

    // write user profile, auth, bank_account, payment 
    .then( () =>(Promise.each( mockData, el => {  
      
      //console.log(el.profile.first);

      return models.Profile.forge(el.profile).save()
        .then((profile) => {
          profile_id = profile.get('id');
          
          // array of profile id to build the join table
          profiles_ids.push(profile_id);

          el.auth.profile_id = profile_id;
          return models.Auth.forge(el.auth).save()
            // payment
            .then(() => {
              el.payment.user_id = profile_id;
              models.Payment.forge(el.payment).save();
            })
            // bank account
            .then(() => {
              el.bank_account.trainer_id = profile_id;
              models.BankAccount.forge(el.bank_account).save();
            });
        })
        .catch((error) => {
          console.log(error);
        });
    })))

    
    // Write the services join table
    .then( () =>(Promise.each( profiles_ids, id => {  
      
      services_join.user_id = id;
      services_join.service_id = services_ids[Math.round(Math.random() * services_ids.length)]; 

      //console.log(el.profile.first);
      return models.ServiceJoin.forge(services_join).save()
        .catch((error) => {
          console.log(error);
        });
    })))


    .catch((error) => {
      console.log(error);
    });
};




// exports.seed = function (knex, Promise) {

//   // delete all rows
//   return models.Profile.where('id', '!=', '0').destroy()
//     .then(models.Auth.where('id', '!=', '0').destroy())

//     // write all object 
//     .then( () =>(Promise.each( mockData, el => {  
//       //console.log(el.profile.first);
//       return models.Profile.forge(el.profile).save()
//         .then((profile) => {
//           el.auth.profile_id = profile.get('id');
//           return models.Auth.forge(el.auth).save();
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })));
// };


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


