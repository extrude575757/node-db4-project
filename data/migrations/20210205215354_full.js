
exports.up = function(knex) {
    return knex.schema
    .createTable('materials', tbl =>{
        tbl.increments('mat_id').unsigned().notNullable();
        tbl.string('mat_name', 128).notNullable()
        tbl.float('mat_quantity',6).notNullable()
        tbl.string('mat_measurement',6).notNullable()
    })


    .createTable('directions', tbl =>{
        tbl.increments('dir_id').unsigned()
        tbl.string('direction', 128).notNullable()
        tbl.int('dir_mat_id')
              .unsigned().notNullable()
              .references('mat_id')
              .inTable('materials')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
    })

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

    .createTable('recipe', tbl =>{
        tbl.increments('rec_id')
        tbl.integer('namesid')
            .unsigned()
            .notNullable()
            .references('name_id')
            .inTable('names')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('dirid')
            .unsigned()
            .notNullable()
            // .references('dir_id')
            // .inTable('directions')
            // .onUpdate('CASCADE')
            // .onDelete('CASCADE');
        tbl.integer('matid')
            .unsigned().notNullable()
            .references('mat_id')
            .inTable('materials')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    })


};

exports.down = function(knex) {
  return knex.schema

        .dropTableIfExists('recipe')
        .dropTableIfExists('names')
        .dropTableIfExists('directions')
        .dropTableIfExists('materials')

  

};
