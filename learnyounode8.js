var http = require('http');
var data = [];
var data_length = 0;
http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on('data', function(d) {
        data.push(d);
        data_length += d.length;
    });
    response.on('end', function() {
        console.log(data_length);
        console.log(data.join(''));
    });
});
