let knex = require('../db')

function getAll() {
  return knex('dogs')
}

function getDogById(id) {
  return knex('dogs').then(result => {
    let dog = result.find(dog => dog.id === id)
    return dog
  })
}

module.exports = {
  getAll,
  getDogById
}
