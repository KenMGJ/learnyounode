var http = require('http');
var url = require('url');

var server = http.createServer(function(req, resp) {
	if (req.method != 'GET') {
		return res.end('Invalid Request');
	}

	var req_url = url.parse(req.url, true);

	if (req_url.pathname === '/api/parsetime') {
		resp.writeHead(200, { 'Content-Type': 'application/json' });

		var d = new Date(req_url.query.iso);
		var ret = {
			hour: d.getHours(),
			minute: d.getMinutes(),
			second: d.getSeconds()
		};

		resp.end(JSON.stringify(ret));
	}
	else if (req_url.pathname === '/api/unixtime') {
		resp.writeHead(200, { 'Content-Type': 'application/json' });

		var d = new Date(req_url.query.iso);
		var ret = {
			unixtime: Math.floor(d.getTime())
		};

		resp.end(JSON.stringify(ret));
	}
	else {
		return resp.end('Invalid Request');
	}

	req.pipe(resp);
});
server.listen(Number(process.argv[2]));
