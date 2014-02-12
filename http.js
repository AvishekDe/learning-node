var http = require("http");
http.createServer( function (request, response){
		response.writeHead(200,{
			'Content-Type': 'text/plain'
		});
		response.end("Hello HTTP");
}).listen(4000);

var http = require('http');
var index = "Hello World";

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello World");
}).listen(9151);