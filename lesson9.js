var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
var url= req.url;
// res.writeHead(200,{'content-type':'text/html'});
 if (url =="/fruits" ){
    fs.readFile('fruits.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();

    })
 }
 else if (url == '/vegetables') {
    fs.readFile('vegetables.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();

    })
    
 }
 else if (url == '/grains') {
    fs.readFile('grains.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();

    })
    
 }

});
server.listen(5000);
console.log('server is ready to start...')