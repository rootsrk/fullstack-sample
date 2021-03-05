'use strict';

const Hapi = require('@hapi/hapi');
const initDB = require('./initializeDB');
const path = require('path');
const Inert = require('@hapi/inert');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
  });

  await server.register(Inert);

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
