exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('bank_accounts', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('trainer_id').references('id').inTable('profiles');
      table.string('account_number', 255).nullable();
      table.string('routing_number', 255).nullable();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('bank_accounts'),
  ]);
};