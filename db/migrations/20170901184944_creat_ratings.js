exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('ratings', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').references('id').inTable('profiles');
      table.integer('trainer_id').references('id').inTable('profiles');
      table.integer('user_rating').nullable();
      table.integer('trainer_rating').nullable();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('ratings'),
  ]);
};