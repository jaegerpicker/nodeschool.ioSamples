var http = require('http');
var fs = require('fs');
var concat = require('concat-stream');
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(concat(function(body) {
            res.write(body.toString().toUpperCase());
            res.end();
        }));
    } else {
        res.end('Only POST supported\n');
    }
});
server.listen(process.argv[2]);
