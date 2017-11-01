const preAuth = require('express').Router()
const users = require('../db/user')


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
  console.log(request.body)
})


module.exports = preAuth
