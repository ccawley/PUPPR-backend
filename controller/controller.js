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

let createDogController = (req, res, next) => {
  let { owner_id, name, about_puppr, picture_url, pet_me, location } = req.body

  if (!owner_id || !name || !about_puppr || !picture_url || !pet_me || !location) return next({ error: 400, message: `Fields owner_id, name, about_puppr, picture_url, pet_me and location are required.` })

  model.createDog(owner_id, name, about_puppr, picture_url, pet_me, location)
   .then(dog => {
     return res.status(201).json(dog)
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

  model.createPetter(name, user_name, password)
    .then(petter => {
      return res.status(201).json(petter)
    })
}

let createDogsPettersController = (req, res, next) => {
  let { petter_id, dog_id, good_boi } = req.body

  if ( !petter_id || !dog_id || !good_boi ) return next({ error: 400, message: `Fields petter_id, dog_id and good_boi are required.` })

  model.createDogsPetters(petter_id, dog_id, good_boi)
    .then(interaction => {
      return res.status(201).json(interaction)
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

let deleteOwnerController = (req, res, next) => {
  let ownerId = req.params.id

  model.deleteOwner(ownerId)
    .then(owner => {
      if (!owner) return next({ error: 404, message: `Could not find owner with id ${ownerId}.` })

      return res.status(204).json(owner)
    })
}

let deletePetterController = (req, res, next) => {
  let petterId = req.params.id

  model.deletePetter(petterId)
    .then(petter => {
      if (!petter) return next({ error: 404, message: `Could not find petter with id ${petterId}.` })

      return res.status(204).json(petter)
    })
}

module.exports = {
  dogsController,
  dogIdController,
  createDogController,
  createOwnerController,
  createPetterController,
  createDogsPettersController,
  deleteDogController,
  deleteOwnerController,
  deletePetterController
}
