var fs = require('fs');

var buf = fs.readFile(process.argv[2], 'utf8', function(err, data) {
    var arr = data.split('\n');
    var out = arr.length - 1;
    console.log(out);
});
