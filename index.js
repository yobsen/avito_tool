const express = require('express')
const bodyParser = require('body-parser')
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

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'manya',
  host: 'localhost',
  database: 'avito',
  password: 'password',
  port: 5432,
})
