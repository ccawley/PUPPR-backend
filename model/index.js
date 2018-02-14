let knex = require('../db')

function getAll() {
  return knex('dogs')
}

function getDogById(dogId) {
  return knex('dogs').then(result => {
    let dog = result.find(dog => dog.id === parseInt(dogId))
    return dog
  })
}

function createDog(name, about_puppr, picture_url, pet_me, location) {
  return knex('dogs')
    .insert({
      // id,
      // owner_id, //help!!!
      name,
      about_puppr,
      picture_url,
      pet_me,
      location,
      // created_at, help!!!
      // updated_at, help!!!
    })
}

module.exports = {
  getAll,
  getDogById,
  createDog
}
