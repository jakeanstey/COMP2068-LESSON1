var http = require("http");

http.createServer(function(request, response){
  response.writeHead(200);
  response.end('first node page');
}).listen(8080);

console.log('Server running on port 8080');
