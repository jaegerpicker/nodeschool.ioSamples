var fs = require('fs');
function ListFiles(dir, ext, callback) {
    fs.readdir(dir, function(err, list) {
        if(err) {
            return callback(err);
        }
        var re = new RegExp("\\." + ext);
        var ret = [];
        list.forEach(function(fn){
            if(fn.match(re) != null) {
                ret.push(fn);
            }
        });
        return callback(null, ret);
    });
}

module.exports = ListFiles
