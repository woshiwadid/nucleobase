exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('payments', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('user_id').references('id').inTable('profiles');
      table.string('card_number', 255).nullable();
      table.string('card_type', 255).nullable();
      table.string('crv', 255).nullable();
      table.string('expiration_data', 255).nullable();
      table.string('name_card_holder', 255).nullable();
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('payments'),
  ]);
};