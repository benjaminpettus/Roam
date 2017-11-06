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
  .join('users', 'posts.user_id', '=', 'users.id')
  .join('cities', 'posts.city_id', '=', 'cities.id')
  .where('posts.id', postId)
  .select('posts.id', 'posts.title','posts.content', 'posts.created_on', 'users.username', 'cities.city_name', 'users.member_since', 'users.current_city')
  .then( posts => posts[0] )
  .catch( error => console.error )
}

// const byId = ( postId ) => {
//   return knex('posts')
//   .where({ id: `${postId}`})
//   .then( posts => posts[0] )
// }


const deleteById = ( postId ) => {

}












module.exports = {
  createPost,
  byUserId,
  byId,
  deleteById,
}
