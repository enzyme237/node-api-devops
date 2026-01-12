'use strict';

 const {createServer} = require('http');
 const { default: getPort } = require('get-port');
 const server = createServer();

 getPort({ port: 4000}).then(port => {
   console.log(`http://localhost:${port}`);
   server.listen(port);

});

