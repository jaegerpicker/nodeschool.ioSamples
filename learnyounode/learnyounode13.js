var http = require('http');
var moment = require('moment');
var url = require('url');


var server = http.createServer(function(req, res) {
    var url_data = url.parse(req.url, true);
    if(url_data.pathname === "/api/parsetime") {
        console.log(url_data);
        if(url_data.query['iso']) {
            var dt = moment(url_data.query['iso']);
            res.end(JSON.stringify({"hour":dt.hour(),"minute":dt.minute(),"second":dt.second()}));
        } else {
            var dt = moment();
            res.end(JSON.stringify({"hour":dt.hour(),"minute":dt.minute(),"second":dt.second()}));
        }
    } else if(url_data.pathname === "/api/unixtime"){
        console.log(url_data);
        if(url_data.query['iso']) {
            var dt = moment(url_data.query['iso']);
            res.end(JSON.stringify({"unixtime":dt.valueOf()}));
        } else {
            var dt = moment();
            res.end(JSON.stringify({"unixtime":dt.valueOf()}));
        }
    } else {
        res.end(JSON.stringify({"status_code":"404"}));
    }
});
server.listen(process.argv[2]);
