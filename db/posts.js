const knex = require('./knex')


const createPost = (title, content, userId, cityId) => {
  return knex('posts')
    .insert({
      title: `${title}`,
      content: `${content}`,
      user_id: `${userId}`,
      city_id: `${cityId}`
    })
    .returning('*')
    .then(post => post)
}


const byUserId = ( userId ) => {
  return knex('posts')
  .where({ user_id: `${userId}`})
  .select()
  .then( posts => posts )
}

const byId = ( postId ) => {
  return knex('posts')
  .where({ id: `${postId}`})
  .select()
  .then( posts => posts )
}

const deleteById = ( postId ) => {

}












module.exports = {
  createPost,
  byUserId,
  byId,
  deleteById,
}
