var http = require('http');
var fs = require('fs');
var server= http.createServer(function(request,response){
    var filename = 'story2.txt';
    var newfilename = 'story3.txt'
    fs.rename(filename,newfilename,function(error){
        if (error){
            console.log('error:'+error);
        }else{
            console.log('file renamed successfully')
        }
    })
});
server.listen(5000);
console.log('ready to accept new request');