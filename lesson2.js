//create web server
var http = require('http');
var server= http.createServer(function(request,response)
{
    console.log('request is received....');
});
server.listen(5000);
console.log('server is started..');
