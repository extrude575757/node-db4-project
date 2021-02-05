
exports.up = function(knex) {
    return knex.schema
      .createTable('names', tbl =>{
          tbl.increments('name_id')
          tbl.string('name', 128).notNullable()
          tbl.int('dir_id',6).notNullable()
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('names')
  };
  