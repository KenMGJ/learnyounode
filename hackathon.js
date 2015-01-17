var http = require('http');
var url = require('url');
var math = require('mathjs');

var server = http.createServer(function(req, resp) {
	if (req.method != 'GET') {
		return res.end('Invalid Request');
	}

	var req_url = url.parse(req.url, true);

	if (req_url.pathname === '/hackathon') {
		resp.writeHead(200, { 'Content-Type': 'application/json' });

		try {
			var x = math.complex(req_url.query.x);
			var y = math.complex(req_url.query.y);
			resp.end(math.add(x, y).toString().replace(/ /g, ''));
		}
		catch(e) {
			return resp.end('error');
		}
	}
	else {
		return resp.end('Invalid Request');
	}

	req.pipe(resp);
});
server.listen(8000);
