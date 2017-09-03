exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('messages', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('sender').references('id').inTable('profiles');
      table.integer('receiver').references('id').inTable('profiles');
      table.string('message', 255).nullable();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('messages'),
  ]);
};