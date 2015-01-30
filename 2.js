	// console.log(process.argv)

	// parseInt(process.argv[2...5])

var total = 0;

process.argv.forEach(function(item) {
	total += +item ? +item : 0;
});

console.log(total);