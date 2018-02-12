
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dogs_petters").del()
    .then(function () {
      // Inserts seed entries
      return knex("dogs_petters").insert([
        { id: 1, petter_id: 2, dog_id: 1, good_boi: true },
        { id: 2, petter_id: 1, dog_id: 3, good_boi: true },
        { id: 3, petter_id: 2, dog_id: 2, good_boi: true },
        { id: 4, petter_id: 1, dog_id: 1, good_boi: true },
        { id: 5, petter_id: 3, dog_id: 2, good_boi: false },
        { id: 6, petter_id: 1, dog_id: 3, good_boi: true }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('dogs_petters_id_seq', (SELECT MAX(id) FROM dogs_petters));`
      );
    })
};
