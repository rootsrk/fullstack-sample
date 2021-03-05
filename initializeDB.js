const { Client } = require('pg');

const initDB = () => {
  const connectionString = `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`;

  const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false },
  });

  client.connect();
};

module.exports = initDB;
