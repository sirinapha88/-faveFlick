exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(table){
 		table.increments();// id serial primary key
 		table.string('name');
 		table.string('email');
 		table.string('password');
 	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');  
};
