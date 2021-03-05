const { Client } = require('pg');

const initDB = () => {
  const connectionString = process.env.DATABASE_URL;

  const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false },
  });
  console.log(connectionString);

  client.connect();
};

module.exports = initDB;
