const restify = require('restify');
const partition = require('./modules/index');

const server = restify.createServer();

server.listen(8889, () => {
  console.log('Mock Server is Started at 8889!!!');
});
partition(server);
