
exports.up = function(knex, Promise) {
  return knex.schema.createTable("petters", table => {
    table.increments("id")
    table.string("name").notNullable().defaultTo("")
    table.string("user_name").notNullable().defaultTo("")
    table.string("password").notNullable().defaultTo("")
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("petters")
};
