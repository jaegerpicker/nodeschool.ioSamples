var ls = require('./ls');
ls(process.argv[2], process.argv[3], function(err, data) {
    if(err){
        console.log(err);
    }
    else {
        data.forEach(function(d) {
            console.log(d);
        });
    }
});
