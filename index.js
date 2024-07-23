const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.send('🐷🐖🐽')
})

app.get('/flats', db.getFlats)
app.get('/flats/:avito_id', db.getFlatById)
app.post('/flats', db.createFlat)
app.delete('/flats/:avito_id', db.deleteFlat)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
