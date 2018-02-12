const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const model = require('./model')
const PORT = process.env.port || 3000

app.use(bodyParser.json())
app.disable('x-powered-by')

app.get('/dogs', req, res => {
  let message = "Woof"
  console.log(`I am server, ${message}!`)
  res.send(`You are client! Boo! Heck! ${message}!`)
})

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`)
})
