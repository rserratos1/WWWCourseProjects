// make use of the http module
const http = require("http");
// configure HTTP server to respond with simple message to all requests
const server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello this is our first node.js application");
  response.end();
});

const port = 8080;
server.listen(port);

console.log("Server running at port = " + port);
