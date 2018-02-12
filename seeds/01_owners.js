
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("owners").del()
    .then(function () {
      // Inserts seed entries
      return knex("owners").insert([
        { id: 1, name: "Curtis Cawley", user_name: "kurple", password: "password0" },
        { id: 2, name: "Stefan Kuhmer", user_name: "swim1989", password: "password1" },
        { id: 3, name: "Kendra O'Brien", user_name: "poops", password: "password2" }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('owners_id_seq', (SELECT MAX(id) FROM owners));`
      );
    })
};
