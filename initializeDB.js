const { Client } = require('pg');

const initDB = () => {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  client.connect();
};

module.exports = initDB;
