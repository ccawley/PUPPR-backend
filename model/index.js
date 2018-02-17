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

function createDog(owner_id, name, about_puppr, picture_url, pet_me, location) {
  return knex('dogs')
    .insert({
      owner_id,
      name,
      about_puppr,
      picture_url,
      pet_me,
      location
    }).returning('*').then(rows => rows[0])
}

function createOwner(name, user_name, password) {
  return knex('owners')
    .insert({
      name,
      user_name,
      password
    }).returning('*').then(rows => rows[0])
}

function createPetter(name, user_name, password) {
  return knex('petters')
    .insert({
      name,
      user_name,
      password
    }).returning('*').then(rows => rows[0])
}

function createDogsPetters(petter_id, dog_id, good_boi) {
  return knex('dogs_petters')
    .insert({
      petter_id,
      dog_id,
      good_boi
    }).returning('*').then(rows => rows[0])
}

function deleteDog(id) {
  return knex('dogs')
    .where('id', parseInt(id))
    .del()
    .returning('*')
}

module.exports = {
  getAll,
  getDogById,
  createDog,
  createOwner,
  createPetter,
  createDogsPetters,
  deleteDog
}
