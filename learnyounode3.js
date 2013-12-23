var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var strArrBuf = buf.toString().split('\n');
console.log(strArrBuf.length - 1);
