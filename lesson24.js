var event = require('events');
var http = require('http');
var url = require('url');

var em = new event.EventEmitter();
const on = 'switchOn';
const off = 'switchOff';
em.once(on,function(data){
    console.log(data + 'is on');
});
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    var q = url.parse(request.url,true).query;
    var service = q.service;
    em.emit(on,service);
    response.write(service + ' service may be started..');
    response.end();

});


server.listen(5000);
console.log('event server is running..');
