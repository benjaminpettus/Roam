
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'ben@gmail.', username:'ben', password:'ben'},
        {id: 2, email: 'ytho@gmail.com', username:'ytho', password:'ytho'},
        {id: 3, email: 'me@gmail.com', username:'me', password:'me'}
      ]);
    });
};
