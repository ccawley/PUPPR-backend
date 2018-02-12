const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.port || 3000
app.use(bodyParser.json())
app.disable('x-powered-by')

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`)
})
