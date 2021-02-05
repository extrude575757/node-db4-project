
exports.up = function(knex) {
  return knex.schema
    .createTable('materials', tbl =>{
        tbl.increments('mat_id')
        tbl.string('mat_name', 128).notNullable()
        tbl.float('mat_quantity',6).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('materials')
};
