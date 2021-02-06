
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {namesid: 1, dirid: 5, matid: 1},
        {namesid: 1, dirid: 3,  matid: 2},
        {namesid: 1, dirid: 2, matid: 1},
        {namesid: 1, dirid: 1, matid: 1},
      ]);
    });
};
