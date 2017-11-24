const preAuth = require('express').Router()
const Users = require('../db/user')
const Cities = require('../db/city')
const bcrypt = require('bcrypt')
const passport = require('../auth/passport')


preAuth.get('/', (request, response) => {
  Cities.getAll()
  .then(cities => {
    if(request.session){
      response.render('index', { cities: cities, session: request.session.passport })
    } else{
      response.render('index', {cities: cities})
    }
  })
})

preAuth.get('/signin', (request, response) => {
  response.render('signin')
})

preAuth.post('/signin',  passport.authenticate('local', {
  successRedirect: '/user',
  failureRedirect: '/signin'
}))


preAuth.get('/signup', (request, response) => {
  response.render('signup')
})

preAuth.post('/signup', (request, response) => {
  const { email, username, password } = request.body
  bcrypt.hash( password, 10, ( err, hash ) => {
    Users.create( email, username, hash )
    .then(user => {
      response.redirect('signin')
    })
  })
})

preAuth.get('/logout', (request, response) => {
  response.clearCookie('user_sid').redirect('/')
})


module.exports = preAuth
