exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('reviews', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').references('id').inTable('profiles');
      table.integer('trainer_id').references('id').inTable('profiles');
      table.string('review', 255).nullable();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('reviews'),
  ]);
};