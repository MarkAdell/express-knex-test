
exports.up = function (knex, Promise) {
    return knex.schema.alterTable('book', function (table) {
        table.string('year', 100).notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('book', function (table) {
        table.dropColumn('year');
    });
};