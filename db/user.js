const knex = require('./knex')


const create = ( email, username, password ) => {
  return knex.select().from('users').where({ email: email })
    .then( user => {
      if(!user.length) {
      return knex( 'users' )
        .insert({
          email: email,
          username:username,
          password: password
        })
        .returning('*')
      }
    })
    .then( newUser => newUser )
    .catch( error => console.error )
}

const byUsername = (username) => {
  return knex('users')
  .where({username: `${username}`})
  .select()
}

const byId = (id) => {
  return knex('users')
  .where({id: `${id}`})
  .select()
  .then( user => user)
}

const byEmail = (email) => {
  return knex('users')
  .where({email: `${email}`})
  .select()
}

module.exports = {
  create,
  byUsername,
  byId,
  byEmail

}
