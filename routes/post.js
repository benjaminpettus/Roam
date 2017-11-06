const post = require('express').Router()
const Posts = require('../db/posts')
const User = require('../db/user')

post.get('/:id', ( request, response ) => {
  const { id } = request.params
  Posts.byId( id )
  .then( post => {
    response.render('post', {post:post, session: request.session})
  })
})



module.exports = post
