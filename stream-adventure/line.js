var split = require('split');
var through = require('through');
var line_no = 1;
process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        if(line_no % 2 == 0) {
            console.log(line.toString().toUpperCase());
        } else {
            console.log(line.toString().toLowerCase());
        }
        line_no += 1;
    }));
