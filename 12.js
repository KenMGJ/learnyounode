var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, resp) {
	resp.writeHead(200, { 'content-type': 'text/plain' });
	req.pipe(map(function(chunk) { return chunk.toString().toUpperCase() })).pipe(resp);
});
server.listen(Number(process.argv[2]));
