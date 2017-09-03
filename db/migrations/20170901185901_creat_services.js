exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('services', function(table) {
      table.increments('id').unsigned().primary();
      table.string('service', 255).nullable();
      table.string('description', 255).nullable();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('services'),
  ]);
};