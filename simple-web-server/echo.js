var 
	http = require("http"),
	url = require("url"),
	path = require("path"),
	fs = require("fs"),
	port = process.argv[2] || 8888;

http.createServer(function(request, response) {

	console.log(request.url);
	console.log(request.method);

	var body = '';
	request.on('data', function (data) {
		body += data;
	});
	request.on('end', function () {
		console.log(body);
	});

	response.writeHead(200);
	response.end();
}).listen(parseInt(port, 10));

console.log("Echo server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
