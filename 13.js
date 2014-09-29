var http = require('http');
var url = require('url');

var time_parser = function(query) {
	if (!query.hasOwnProperty('iso')) {
		return 'Invalid Request';
	}
	return 'VALID';
}

var server = http.createServer(function(req, resp) {
	if (req.method != 'GET') {
		return res.end('Invalid Request');
	}

	var req_url = url.parse(req.url, true);

	if (req_url.pathname === '/parsetime' || req_url.pathname === '/unixtime') {
		resp.end(time_parser(req_url.query));
	}
	else {
		return resp.end('Invalid Request');
	}

	req.pipe(resp);
});
server.listen(Number(process.argv[2]));
