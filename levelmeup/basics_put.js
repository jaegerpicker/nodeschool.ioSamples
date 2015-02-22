var level = require('level');
var db = level(process.argv[2]);
var json = JSON.parse(process.argv[3]);
console.log(json);
for(var key in json) {
    db.put(key, json[key]);
}
