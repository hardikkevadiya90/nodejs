var http = require('http');
var fs= require('fs');
var server = http.createServer(function(req,res){
    console.log('i have received a new request');
    var filename = 'country.txt';
    var contect= "india pakistan china ";
    fs.writeFileSync(filename,contect,'utf-8');
    console.log('file saved successfully');

});
server.listen(5000);
console.log('ready to accept new request');
