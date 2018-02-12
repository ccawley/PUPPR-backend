
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('petters').del()
    .then(function () {
      // Inserts seed entries
      return knex('petters').insert([
        { id: 1, name: "Amalia", user_name: "princess", password: "password4" },
        { id: 2, name: "Yuliya", user_name: "comrade4lyfe", password: "password5" },
        { id: 3, name: "Shane", user_name: "wsubrah", password: "password6" }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('petters_id_seq', (SELECT MAX(id) FROM petters));`
      );
    })
};
