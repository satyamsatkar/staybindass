const sql = require('mysql');

const db = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'staybindass',
  });

  module.exports = db;