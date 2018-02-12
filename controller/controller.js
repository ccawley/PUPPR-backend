let model = require('../model')

let dogsController = (req, res, next) => {
  model.getAll().then(result => {
    let dogs = result;
    return res.status(200).json(dogs)
  })
}

module.exports = {
  dogsController
}
