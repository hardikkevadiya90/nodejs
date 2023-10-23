var event = require('events');
var http = require('http');
var url = require('url');

var em = new event.EventEmitter();
const on = 'switchOn';
const off = 'switchOff';
var serviceOn = function (data) {
    console.log(data + 'service is on');

};
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    em.on(on, serviceOn);
    em.emit(on, 'wifi');
    em.emit(on, 'ac');
    em.removeListener(on, serviceOn)
    em.emit(on, 'blutooth');
    res.write('service may be started...');
    res.end();

})


server.listen(5000);
console.log('event server is running..');
