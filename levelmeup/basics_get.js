var level = require('level');
var db = level(process.argv[2]);
function fetchNext(i) {
    //console.log(i);
    var key = 'key' + i;
    db.get(key, function(err, value) {
        if(!err){
            console.log(key + '=' + value);
        } else {
            if(!err.notFound) {
                throw err;
            }
        }
        if(i < 100) {
            fetchNext(i + 1);
        }
    });
}
fetchNext(0);
