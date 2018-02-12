
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dogs").del()
    .then(function () {
      // Inserts seed entries
      return knex("dogs").insert([
        { id: 1, owner_id: 1, name: 'Bow Wowser', about_puppr: "Wowser is the best boi!", picture_url: "http://lorempixel.com/200/200/animals/8", pet_me: true, location: "Floor 2 at Galvanize" },
        { id: 2, owner_id: 2, name: 'Carrot Boi', about_puppr: "I is timid but warms up!", picture_url: "http://lorempixel.com/200/200/animals/10", pet_me: false, location: "Magnolia Pointe Apartments" },
        { id: 3, owner_id: 3, name: 'Griffin', about_puppr: "I am derpy and playful!", picture_url: "http://lorempixel.com/200/200/animals/9", pet_me: true, location: "Grant Park" }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('dogs_id_seq', (SELECT MAX(id) FROM dogs));`
      );
    })
};
