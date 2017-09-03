exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('user_trainer_join', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').references('id').inTable('profiles');
      table.integer('trainer_id').references('id').inTable('profiles');
      table.boolean('view').default(false);
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_trainer_join'),
  ]);
};