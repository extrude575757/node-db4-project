
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('directions').del()
    .then(function () {
      // Inserts seed entries
      return knex('directions').insert([
        {direction: 'Fly with the sauce and randle makers', 
        dir_mat_id: 1},
        {direction: 'Bake the rice on high for 30 min.', 
        dir_mat_id: 2},
        {direction: 'Fry the bread until its been toasted', 
        dir_mat_id: 3},
        {direction: 'Spread clam chowder on all bread', 
        dir_mat_id: 1},
      ]);
    });
};
