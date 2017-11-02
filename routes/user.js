const user = require('express').Router()
const User = require('../db/user')





user.get('/', ( request, response ) => {
  const { user } = request.session.passport
  response.redirect(`/user/${user}`)
})

user.get('/:id', ( request, response ) => {
  const { id } = request.params
  User.byId(id)
  .then( user => {
    response.render('profile', {session: request.session, id: `${id}`})
  })
  .catch(error => console.error )
})

user.get('/:id/edit-user', ( request, response ) => {
  const { id } = request.params
  response.render('edit-user', { session: request.session, id: `${id}` })
})

user.put('/:id/edit-user', ( request, response ) => {
  const { id } = request.params
  const { username, current_city } = request.body
  console.log( username, current_city )
  User.updateInfo( id, username, current_city)
  .then( user => {
    response.redirect(`/user/${id}`)
  })
})



module.exports = user
