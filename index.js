'use strict';

const Hapi = require('@hapi/hapi');
const initDB = require('./initializeDB');

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

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      h.sendFile(path.join(__dirname + '/client/public/index.html'));
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
