
let port = process.argv[2]
const net = require("net");
const server = net.createServer(function (socket) {
var d = new Date();
date = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes();
socket.write(date)
socket.end();
})

server.listen(port)
