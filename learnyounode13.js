var http = require('http');
var moment = require('moment');
var url = require('url');


var server = http.createServer(function(req, res) {
    var url_data = url.parse(req.url, true);
    if(url_data.pathname === "/api/parsetime") {
        console.log(url_data);
        if(url_data.query['iso']) {
            var dt = moment(url_data.query['iso']);
            res.end(dt.toString());
        } else {
            var dt = moment();
            res.end(dt.toString());
        }
    } else if(url_data.pathname === "/api/unixtime"){
        console.log(url_data);
        if(url_data.query['iso']) {
            var dt = moment(url_data.query['iso']);
            res.end(dt.format('X').toString());
        } else {
            var dt = moment();
            res.end(dt.format('X').toString());
        }
    } else {
        res.end("404");
    }
});
server.listen(process.argv[2]);
