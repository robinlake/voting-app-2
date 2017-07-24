
exports.up = function(knex, Promise) {
  return knex.schema.createTable('polls', function(table){
    table.increments();
    table.string('PollQuestion').notNullable().unique();
    table.string('username').notNullable().unique();
    table.string('Answer1').notNullable();
    table.string('Answer1Votes');
    table.string('Answer2').notNullable();
    table.string('Answer2Votes');
    table.string('Answer3');
    table.string('Answer3Votes');
    table.string('Answer4');
    table.string('Answer4Votes');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('polls');
};
