var http = require('http');
var fs = require('fs');

var file = fs.createReadStream(process.argv[3]);
var server = http.createServer(function (req, res) {
      file.pipe(res);
});
server.listen(process.argv[2]);
