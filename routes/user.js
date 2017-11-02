const user = require('express').Router()
const User = require('../db/user')





user.get('/', ( request, response ) => {
  const { user } = request.session.passport
  response.redirect(`/user/${user}`)
})

user.get('/:id', ( request, response ) => {
  const { id } = request.params
  console.log('from id route', id)
  User.byId(id)
  .then( user => {
    response.render('profile', {session: request.session, id: `${id}`})
  })
  .catch(error => console.error )
})

user.get('/id:/update', ( requst, response ) => {
  const { id } = request.params
  response.render('update-user')
})




module.exports = user
