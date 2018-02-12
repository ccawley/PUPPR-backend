
exports.up = function(knex, Promise) {
  return knex.schema.createTable("dogs_petters", table => {
    table.increments("id")
    table.integer("petter_id")
    table.foreign("petter_id").references("petters.id").onDelete("CASCADE")
    table.integer("dog_id")
    table.foreign("dog_id").references("dogs.id").onDelete("CASCADE")
    table.boolean("good_boi").nullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("dogs_petters")
};
