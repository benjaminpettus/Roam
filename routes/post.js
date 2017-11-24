const post = require('express').Router()
const Posts = require('../db/posts')
const User = require('../db/user')

post.get('/:id', ( request, response ) => {
  const { id } = request.params
  Posts.byId( id )
  .then( post => {
    if (request.session.passport){
      response.render('post', {post:post, session: request.session})
    }
    response.render('post', {post: post})
    })
})



module.exports = post
