
exports.up = function(knex) {
    return knex.schema
      .createTable('names', tbl =>{
          tbl.increments('name_id')
          tbl.string('name', 128).notNullable()
          tbl.int('dirs_id')
            .unsigned()
            .notNullable()
            .references('dir_id')
            .inTable('directions')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('names')
  };
  