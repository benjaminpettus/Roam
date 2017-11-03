
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments()
    table.string('title')
    table.string('content')
    table.integer('user_id')
    table.integer('city_id')
    table.timestamp('created_on', true).defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
