var fs = require('fs');
var re = new RegExp("\\." + process.argv[3]);

fs.readdir(process.argv[2], function(err, list) {
    list.forEach(function(fn){
        if(fn.match(re) != null) {
            console.log(fn);
        }
    });
});
