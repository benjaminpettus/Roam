require('dotenv').config()
const config = require('./knexfile')
module.exports = knex('knex')(config)
