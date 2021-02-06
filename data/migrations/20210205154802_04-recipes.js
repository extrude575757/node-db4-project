
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl =>{
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
            .references('dir_id')
            .inTable('names')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('matid')
            .unsigned()
            .notNullable()
            .references('dir_mat_id')
            .inTable('directions')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    })
};

exports.down = function(knex) {
  dropTableIfExists('recipes');
};
