var filtered_dir = require('./06-read_filtered_dir');

filtered_dir(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		console.log(err);
	}
	else {
		data.forEach(function(x) { console.log(x) } );
	}
});
