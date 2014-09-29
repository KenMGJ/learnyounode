var fs = require('fs');
var path = require('path');

var file = fs.readdir(process.argv[2], function(err, data) {
	if (!err) {
		data.filter(function(x) { return path.extname(x) === '.' + process.argv[3] }).forEach(function(x) { console.log(x) });
	}
});
