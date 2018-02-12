const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require("body-parser")
const morgan = require("morgan")
const model = require("./model")
// const controller = require("./controller")

app.disable('x-powered-by')
if (process.env.NODE_ENV === "development") app.use(morgan("dev"))
app.use(bodyParser.json())

app.get('/dogs', (req, res) => {
  let message = "Woof"
  console.log(`I am server, ${message}!`)
  res.send(`You are client! Boo! Heck! ${message}!`)
})

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
