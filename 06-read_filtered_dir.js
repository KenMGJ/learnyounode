var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, data) {
		if (err) {
			return callback(err);
		}
		return callback(null, data.filter(function(x) { return path.extname(x) === '.' + ext }));
	});
}
