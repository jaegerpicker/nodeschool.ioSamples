var trumpet = require('trumpet');
var tr = trumpet();
var through = require('through');
var th = through(write, end);
process.stdin.pipe(tr);

function write (buf) { this.queue(buf.toString().toUpperCase()); }
function end () { this.queue(null); }

var stream = tr.select('.loud').createStream();
stream.pipe(th).pipe(stream);
tr.pipe(process.stdout);
