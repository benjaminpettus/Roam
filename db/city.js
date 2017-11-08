const knex = require('./knex')



const getByName = (cityName) => {
  return knex('cities')
    .where('cities.city_name', cityName)
    .then( city => city[0] )
    .catch( error => console.error )
}

const getById = (cityId) => {
  return knex('cities')
    .where('cities.id', cityId)
    .then( city => city[0] )
    .catch( error => console.error )
}







module.exports = {
  getByName,
  getById
}
