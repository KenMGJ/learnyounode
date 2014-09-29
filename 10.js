var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
	var date = new Date();
	var now = strftime('%F %H:%M', date);
	socket.end(now + "\n");
});
server.listen(process.argv[2]);
