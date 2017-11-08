
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {id: 1, city_name: 'Oakland'},
        {id: 2, city_name: 'San Francisco'},
        {id: 3, city_name: 'Atlanta'},
        {id: 4, city_name: 'Honolulu'},
        {id: 5, city_name: 'Denver'},
        {id: 6, city_name: 'Los Angeles'},
        {id: 7, city_name: 'New York'}
      ]);
    });
};
