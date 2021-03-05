'use strict';

const Hapi = require('@hapi/hapi');
const initDB = require('./initializeDB');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
  });
  server.route({
    method: 'GET',
    path: '/api',
    handler: (request, h) => {
      return {
        text: 'Hello You!',
      };
    },
  });
  initDB();

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
