var event = require('events');
var http = require('http');
var url = require('url');

var em = new event.EventEmitter();
const on = 'switchOn';
const off = 'switchOff';
var count = 0;
var isServiceOn = false;
//1st way to create event
em.on(on, function (data) {
    if (count < 2) {
        console.log(data + "is on");
        count++
        isServiceOn = true;

    }
    else {
        console.log('no more on');
        isServiceOn = false;
    }
});
em.addListener(off, (data) => {
    console.log(data + 'is off');
    count--;
});
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(request.url, true).query;
    var service = q.service;
    var mode = q.mode;
    if (mode == undefined) {
        mode: 'on';
        em.emit(on, service);

    }
    else if (mode == 'off') {
        em.emit(off, service);
    }
    if (mode == 'on' && isServiceOn == true) {
        response.write(service + 'service is on');

    } else if (mode == 'off') {
        response.write(service + 'service is off');

    }
    else
        response.write(service + ' service can not be started...');
    response.end();
});
server.listen(5000);
console.log('event server is running..');
