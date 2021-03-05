'use strict';

const Hapi = require('@hapi/hapi');
const initDB = require('./initializeDB');
const path = require('path');
const Inert = require('@hapi/inert');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
  });

  initDB();

  server.route({
    method: 'GET',
    path: '/api',
    handler: (request, h) => {
      console.log('here request');
      return {
        text: 'Hello You!',
      };
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
