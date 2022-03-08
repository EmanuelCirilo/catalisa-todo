const createKnex = require('knex');

const knex = createKnex({
  client: 'mysql2',
  debug: true,
  connection: {
	database: 'catalisa_todo',
	host: '127.0.0.1',
	user: 'root',
	password: 'Manu2002',
  }
});
const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
