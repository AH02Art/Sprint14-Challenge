
exports.up = async function(knex) {
    await knex.schema 
    .createTable('projects', function(table) {
        table.increments('project_id');
        table.string('project_name', 128).notNullable();
        table.string('project_description', 256);
        table.boolean('project_completed').defaultTo(false);
    })
    .createTable('resources', function(table) {
        table.increments('resource_id');
        table.string('resource_name', 128).unique().notNullable();
        table.string('resource_description', 256);
    })
    .createTable('tasks', function(table) {
        table.increments('task_id');
        table.string('task_description', 256).notNullable();
        table.string('task_notes', 256);
        table.boolean('task_completed').defaultTo(false);
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT');
    })
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
