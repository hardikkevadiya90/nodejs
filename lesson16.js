var http = require('http');
var fs = require('fs');
var server= http.createServer(function(request,response){
    var filename = 'story1.txt';
    fs.unlink(filename,function(error){
        if (error){
            console.log('error:'+error);
        }else{
            console.log('file deleted successfully')
        }
    })
});
server.listen(5000);
console.log('ready to accept new request');