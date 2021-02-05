
exports.up = function(knex) {
    return knex.schema
      .createTable('directions', tbl =>{
          tbl.increments('dir_id')
          tbl.string('direction', 128).notNullable()
          tbl.int('dir_mat_id',6).notNullable()
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('directions')
  };
  