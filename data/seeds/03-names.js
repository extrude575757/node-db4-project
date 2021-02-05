
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('names').del()
    .then(function () {
      // Inserts seed entries
      return knex('names').insert([
        {name: 'Baked Faust', dir_id: 1}, 
        {name: 'Baked Faust', dir_id: 2}, 
        {name: 'Cream Corn', dir_id: 3}, 
        {name: 'Baked Corn', dir_id: 4},  
      ]);
    });
};
