// let uuid = require('uuid/v4');
// let fs = require('fs');
// let filePath = './data.json';
// let dogsInJSON = fs.readFileSync('./data.json', 'utf-8');
// let dogs = JSON.parse(booksInJSON)
let knex = require('../db');

function getAll() {
  return knex('dogs');
}

module.exports = {
  getAll
}
