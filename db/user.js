const knex = require('./knex')


const create = (email, username, password) => {
  knex('users')
  .returning('id')
  .insert({email: `${email}`, username: `${username}`, password: `${password}`})

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
  byEmail,
  remove,
}
