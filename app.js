'use strict';

// packages.
const http = require('http');
const os = require('os')

// constants.
var HOSTNAME; // declared non const as dynamically obtained.
const PORT = 3000;

// calulate local docker IP.
const net_int = os.networkInterfaces(); 
for (var key in net_int) { 
  if (key === 'eth0') {
      var net_infos=net_int[key]; 
      for (const [key, value] of Object.entries(net_infos[0])) {
        if (key == 'address') {
          HOSTNAME = value;
          break;
        }
      }
  } 
}

// define basic HTTP server and call back to porcess request/response.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from NodeJS');
});

// block and wait ffor incoming requests.
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});