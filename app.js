const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const model = require("./model/index")
const controller = require("./controller/controller")

app.disable("x-powered-by")
if (process.env.NODE_ENV === "development") app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cors())

app.get("/dogs", controller.dogsController)
app.get("/dogs/:id", controller.dogIdController)
app.post("/dogs", controller.createDogController)
app.post("/owners", controller.createOwnerController)
app.post("/petters", controller.createPetterController)
app.post("/dogs_petters", controller.createDogsPettersController)
app.delete("/dogs/:id", controller.deleteDogController)
app.delete("/owners/:id", controller.deleteOwnerController)
app.delete("/petters/:id", controller.deletePetterController)

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

app.use((err, req, res, next) => {
  let status = err.status || 500
  console.log(err)
  res.status(status).json({ error: err })
})

let listener = () => `Listening on port ${PORT}!`
app.listen(PORT, listener)

module.exports = app
