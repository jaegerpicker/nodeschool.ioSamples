var level = require('level');
var db_not_ready = true;
var db = level(process.argv[2]);
var b = db.batch();
var fs = require('fs');
var buf = fs.readFile(process.argv[3], 'utf8', function(err, data) {
    var arr = data.split('\n');
    arr.forEach(function(line) {

        //console.error(line);
        var batch_command = line.split(',');
        console.error(batch_command[0]);
        if(batch_command[0] == 'put') {
            b.put(batch_command[1], batch_command[2]);
        } else {
            b.del(batch_command[1]);
        }
    });

    b.write(function(err) {
        if(err) {
            console.error(err);
        }
        db_not_ready = false;
    });
});
