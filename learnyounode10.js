var net = require('net');
var moment = require('moment');

var server = net.createServer(function (socket) {
    dt = moment().format('YYYY-MM-DD HH:mm');
    socket.end(dt);
})
server.listen(process.argv[2]);
