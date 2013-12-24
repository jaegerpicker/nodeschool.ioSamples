var http = require('http');
var complete1 = false;
var complete2 = false;
var complete3 = false;
var data1 = [];
var data2 = [];
var data3 = [];
var data_length1 = 0;
var data_length2 = 0;
var data_length3 = 0;

function checkComplet(b1, b2, b3, cb) {
    if(b1 && b2 && b3){
        return cb();
    }
}

function doThree(callback) {
    http.get(process.argv[2], function(response) {
        response.setEncoding('utf8');
        response.on('error', console.error);
        response.on('data', function(d) {
            data1.push(d);
            data_length1 += d.length;
        });
        response.on('end', function() {
            complete1 = true;
            return checkComplet(complete1, complete2, complete3, callback);
        });
    });

    http.get(process.argv[3], function(response) {
        response.setEncoding('utf8');
        response.on('error', console.error);
        response.on('data', function(d) {
            data2.push(d);
            data_length2 += d.length;
        });
        response.on('end', function() {
            complete2 = true;
            return checkComplet(complete1, complete2, complete3, callback);
        });
    });

    http.get(process.argv[4], function(response) {
        response.setEncoding('utf8');
        response.on('error', console.error);
        response.on('data', function(d) {
            data3.push(d);
            data_length3 += d.length;
        });
        response.on('end', function() {
            complete3 = true;
            return checkComplet(complete1, complete2, complete3, callback);
        });
    });
}

doThree(function() {
    console.log(data1.join(''));
    console.log(data2.join(''));
    console.log(data3.join(''));
});
