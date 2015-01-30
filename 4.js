var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, 'utf-8', function(err, data) {
	var lines = data.split('\n');
	console.log(lines.length-1);
});
