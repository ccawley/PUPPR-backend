let model = require('../model')

let dogsController = (req, res, next) => {
  model.getAll().then(result => {
    let dogs = result
    return res.status(200).json(dogs)
  })
}

let dogIdController = (req, res, next) => {
  let dogId = req.params.id

  model.getDogById(dogId)
    .then(dog => {

      if (!dog) return next({ error: 404, message: `Could not find dog with id ${dogId}.` })

      return res.status(200).json(dog)
  })
}

let createOwnerController = (req, res, next) => {
  let { name, user_name, password } = req.body

  if ( !name || !user_name || !password ) return next({ error: 400, message: `Fields name, user_name and password are required.` })

  model.createOwner(name, user_name, password)
    .then(owner => {
      return res.status(201).json(owner)
    })
}

let createPetterController = (req, res, next) => {
  let { name, user_name, password } = req.body

  if ( !name || !user_name || !password ) return next({ error: 400, message: `Fields name, user_name and password are required.` })

  model.createOwner(name, user_name, password)
    .then(owner => {
      return res.status(201).json(owner)
    })
}

let createDogController = (req, res, next) => {
  let { owner_id, name, about_puppr, picture_url, pet_me, location } = req.body

  if (!owner_id || !name || !about_puppr || !picture_url || !pet_me || !location) return next({ error: 400, message: `Fields owner_id, name, about_puppr, picture_url, pet_me and location are required.` })

  model.createDog(owner_id, name, about_puppr, picture_url, pet_me, location)
   .then(dog => {
     return res.status(201).json(dog)
   })
}

let deleteDogController = (req, res, next) => {
  let dogId = req.params.id

  model.deleteDog(dogId)
    .then(dog => {

      if (!dog) return next({ error: 404, message: `Could not find dog with id ${dogId}.` })

      return res.status(204).json(dog)
  })
}

module.exports = {
  dogsController,
  dogIdController,
  createOwnerController,
  createDogController,
  createPetterController,
  deleteDogController
}
