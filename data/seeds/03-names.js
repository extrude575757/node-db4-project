
exports.seed = function(knex) {
  // Deletes ALL existing entries in names
  return knex('names').del()
    .then(function () {
      // Inserts seed entries
      return knex('names').insert([
        {name: 'Baked Faust', dirs_id: 1}, 
        {name: 'Baked Faust', dirs_id: 2}, 
        {name: 'Cream Corn', dirs_id: 3}, 
        {name: 'Baked Corn', dirs_id: 4},  
      ]);
    });
};
