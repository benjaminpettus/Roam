const post = require('express').Router()
const Posts = require('../db/posts')
const User = require('../db/user')

post.get('/:id', ( request, response ) => {
  const { id } = request.params
  Posts.byId(id)
  .then( post => {
    const userId = post.user_id
  return User.byId(userId)
  .then( user => {
    console.log('user in route:::',user)
    response.render('post', {post:post, user:user})
  })
  })
  // Posts.byId(id)
  // .then( post => {
  //   console.log('in route::::',post)
  //   response.render('post', {post: post})
  // })

})



module.exports = post
