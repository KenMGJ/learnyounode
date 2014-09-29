var http = require('http');

var responses = [];
var callbacks = 0;
var print_responses = function() {
	callbacks++;
	if (callbacks === 3) {
		responses.forEach( function(x) { console.log(x) } );
	}
}

var get_data = function(response, i) {
	response.setEncoding('utf8');

	var answer = '';

	response.on('data', function(data) { answer += data });
	response.on('error', console.error);
	response.on('end', function() { responses[i] = answer; print_responses(); });
};

http.get(process.argv[2], function(response) { get_data(response, 0) });
http.get(process.argv[3], function(response) { get_data(response, 1) });
http.get(process.argv[4], function(response) { get_data(response, 2) });
