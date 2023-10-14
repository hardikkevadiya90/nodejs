var http= require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    var url = req.url;
    res.writeHead(200,{'content-type':'text/html'});
    var FileContent='';
    if (url == '/fruits') {
        FileContent = fs.readFileSync('fruits.html');

    }
    if (url == '/vegetables') {
        FileContent = fs.readFileSync('vegetables.html');
        
    }
    if (url == '/vegetables') {
        FileContent = fs.readFileSync('vegetables.html');
        
    };
    res.write(FileContent);
    res.end();

});
server.listen(5000);
console.log('ready to start server... ');
