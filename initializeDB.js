const { Client } = require('pg');

const initDB = () => {
  const client = new Client({
    user: 'rcizqtkveueezl',
    host: 'ec2-50-19-176-236.compute-1.amazonaws.com',
    database: 'ddff0v5frm8fn8',
    password:
      '78fb7e4d8d83b9644a86520b832e167ae867ba7cd4394de5af8aa7b6dd644372',
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
