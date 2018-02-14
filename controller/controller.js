let model = require('../model')

let dogsController = (req, res, next) => {
  model.getAll().then(result => {
    let dogs = result
    return res.status(200).json(dogs)
  })
}

let dogIdController = (req, res, next) => {
  let dogId = req.params.id

  model.getDogById(dogId).then(result => {
    let dog = result

    if (!dog) return next({ error: 404, message: `Could not find dog with id ${dogId}.` })

    return res.status(200).json(dog)
  })
}

let createDogController = (req, res, next) => {
  let { name, about_puppr, picture_url, pet_me, location } = req.body;

  model.createDog(name, about_puppr, picture_url, pet_me, location)
   .then(result => {
     if (!name || !about_puppr || !picture_url || !pet_me || !location) return next({ error: 400, message: `Fields name, about, picture url, pet me and location are required.` })

     return res.status(201)//.json(dog)
   })
}

module.exports = {
  dogsController,
  dogIdController,
  createDogController
}
