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
    if (request.session.passport){
      response.render('city', { city: city, posts: posts, sesson: request.session })
    } else {
      response.render('city', { city: city, posts: posts })
    }
  })
  })
})

city.get('/:cityName/add', ( request, response ) => {
  const { cityName } = request.params
  const { user } = request.session.passport || ''
  if( user ){
    response.render('add-post' , { session: request.session, cityName: cityName, user: user})
  } else {
    response.redirect('/city/' + cityName )
  }
})



module.exports = city
