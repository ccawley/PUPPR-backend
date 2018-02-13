let model = require('../model')

let dogsController = (req, res, next) => {
  model.getAll().then(result => {
    let dogs = result
    return res.status(200).json(dogs)
  })
}

let dogIdController = (req, res, next) => {
  model.getDogById().then(result => {
    let dog = result
    return res.status(200).json(dog)
  })
}

module.exports = {
  dogsController,
  dogIdController
}
