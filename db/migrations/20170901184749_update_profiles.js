exports.up = function(knex, Promise) {
  return knex.schema.table('profiles', function(table) {
    table.integer('rating').nullable();
    table.integer('ratingCount').nullable();
    table.string('cookie', 100).nullable();
    table.integer('totalView').nullable();
    table.string('gyms', 255).nullable();
    table.integer('avg-price').nullable();
    table.string('qualification', 255).nullable();
    table.string('biography', 255).nullable();
    table.string('goals', 255).nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('profiles', function(table) {
    table.dropColumn('rating');
    table.dropColumn('rating_count');
    table.dropColumn('cookie');
    table.dropColumn('total_view');
    table.dropColumn('gyms');
    table.dropColumn('avg-price');
    table.dropColumn('qualification');
    table.dropColumn('biography');
    table.dropColumn('goals');
  });
};



