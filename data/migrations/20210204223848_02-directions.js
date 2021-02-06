
exports.up = function(knex) {
    return knex.schema
      .createTable('directions', tbl =>{
          tbl.increments('dir_id').unsigned()
          tbl.string('direction', 128).notNullable()
          tbl.int('dir_mat_id')
                .unsigned()
                .notNullable()
                .references('mat_id')
                .inTable('materials')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('directions')
  };
  