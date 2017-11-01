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
  knex('users')
  .where({username: `${username}`})
  .select()
}

const byId = (id) => {
  knex('users')
  .where({id: `${id}`})
  .select()
}

const byEmail = (email) => {
  knex('users')
  .where({email: `${email}`})
  .select()
}

module.exports = {
  create,
  byUsername,
  byId,
  byEmail

}
