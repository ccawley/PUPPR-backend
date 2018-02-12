
exports.up = function(knex, Promise) {
  return knex.schema.createTable("dogs", table => {
    table.increments("id")
    table.integer("owner_id").notNullable()
    table.foreign("owner_id").references("owners.id").onDelete("CASCADE")
    table.string("name").notNullable().defaultTo("")
    table.string("about_puppr").notNullable().defaultTo("")
    table.string("picture_url").notNullable().defaultTo("")
    table.boolean("pet_me").notNullable().defaultTo(false)
    table.string("location").notNullable().defaultTo("")
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("dogs")
};
