const city = require('express').Router()
const City = require('../db/city')
const Posts = require('../db/posts')


city.get('/:cityName', ( request, response ) => {
  const { cityName } = request.params
  console.log(cityName)
  City.getByName(cityName)
  .then( city => {
  Posts.byCityId(city.id)
  .then( posts => {
    response.render('city', { city: city, posts: posts, sesson: request.session })
  })
  })
})




module.exports = city
