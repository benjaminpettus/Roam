const preAuth = require('express').Router()
const Users = require('../db/user')
const bcrypt = require('bcrypt')


preAuth.get('/', (request, response) => {
  response.render('index')
})

preAuth.get('/signin', (request, response) => {
  response.render('signin')
})

preAuth.post('/signin', (request, response) => {
  console.log(request.body)
  console.log('Posted that shit')
})


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
  console.log('you are logged out b')
})


module.exports = preAuth
