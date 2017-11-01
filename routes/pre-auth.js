const preAuth = require('express').Router()
const Users = require('../db/user')


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
  Users.create( email, username, password )
    .then(user => {
      response.redirect('signin')
    })
})


module.exports = preAuth
