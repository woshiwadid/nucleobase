exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('services_join', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').references('id').inTable('profiles');
      table.integer('service_id').references('id').inTable('services');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('services_join'),
  ]);
};