
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materials').del()
    .then(function () {
      // Inserts seed entries
      return knex('materials').insert([
        { mat_name: 'Green Pepper', mat_quantity: .2},
        { mat_name: 'Steak Sauce',  mat_quantity: 1.2},
        { mat_name: 'Iron Meat Straps', mat_quantity: 4.32}
      ]);
    });
};
