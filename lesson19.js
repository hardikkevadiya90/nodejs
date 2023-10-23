var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    // response.writeHead(200, { 'content-type': 'text/html' });
    var myurl = url.parse(request.url, true);
    let filename = '.' + myurl.pathname;
    console.log(filename);
    fs.readFile(filename, function (error, data) {
        if (error) {
            response.writeHead(404, { 'content-type': 'text/html' });
            response.end('404 not found');

        } else {
            response.writeHead(200, { 'content-type': 'text/html' });
            response.write(data);
            response.end();

        }
    })




});
server.listen(5000);
console.log('ready to accept new request');
