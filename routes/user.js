const user = require('express').Router()
const User = require('../db/user')
const Posts = require('../db/posts')


user.get('/', ( request, response ) => {
  const { user } = request.session.passport
  response.redirect(`/user/${user}`)
})

user.get('/:id', ( request, response ) => {
  const { id } = request.params
  User.byId( id )
  .then( user => {
  return Posts.byUserId(id)
  .then( posts => {
    response.render('profile', {session: request.session, id: `${id}`, user: user, posts: posts})
  })
  })
  .catch(error => error )
})

user.get('/:id/edit-user', ( request, response ) => {
  const { id } = request.params
  User.byId( id )
  .then( user => {
    if( request.session.passport.user == id ){
      return response.render('edit-user', { session: request.session, id: `${id}`, user: user })
    }
      return response.redirect(`/user/${id}`)
  })
})

user.put('/:id/edit-user', ( request, response ) => {
  const { id } = request.params
  const { username, city } = request.body
  console.log('Body in route::',request.body)
  console.log(id, username, city)
  User.updateInfo( id, username, city)
  .then( user => {
    response.redirect( '/user/' + id )
  })
})



module.exports = user
