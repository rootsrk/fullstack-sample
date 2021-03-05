const { Client } = require('pg');

const initDB = () => {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'password',
    port: 5432,
  });

  const query = `
    CREATE TABLE  sample (
        email varchar,
        firstName varchar,
        lastName varchar,
        age int
    );`;

  client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Table is successfully created');
    client.end();
  });

  client.connect();
};

module.exports = initDB;
