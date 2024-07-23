const Pool = require('pg').Pool
const pool = new Pool({
  user: 'manya',
  host: 'localhost',
  database: 'avito',
  password: 'password',
  port: 5432,
})

const getFlats = (request, response) => {
  pool.query('SELECT * FROM flats ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getFlatById = (request, response) => {
  const avito_id = parseInt(request.params.avito_id)

  pool.query('SELECT * FROM flats WHERE avito_id = $1', [avito_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createFlat = (request, response) => {
  const { avito_id, photo, name, price, price_per_m, rooms_number, area, floor, building_type, year, renovation, restroom, kitchen_area, description, link } = request.body

  pool.query('INSERT INTO flats (avito_id, photo, name, price, price_per_m, rooms_number, area, floor, building_type, year, renovation, restroom, kitchen_area, description, link) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *', [avito_id, photo, name, price, price_per_m, rooms_number, area, floor, building_type, year, renovation, restroom, kitchen_area, description, link], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Flat added with ID: ${results.rows[0].avito_id}`)
  })
}

const deleteFlat = (request, response) => {
  const avito_id = parseInt(request.params.avito_id)

  pool.query('DELETE FROM flats WHERE avito_id = $1', [avito_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Flat deleted with ID: ${avito_id}`)
  })
}

module.exports = {
  getFlats,
  getFlatById,
  createFlat,
  deleteFlat,
}
