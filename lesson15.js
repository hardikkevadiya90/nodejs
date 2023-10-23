var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){
    var filename = 'story.txt';
    fs.open(filename,"r",(error,handle)=>{
        if(error){
            console.log('error:'+ error);
        }
        else{
            var size = 4096;
            var buffer = new Buffer(size);
            var start_position = 0;
            fs.read(handle,buffer,start_position,size,null,function(err,length){
                if (err){
                    console.log('error:'+ err);
                }
                else{
                    response.writeHead(200,{'content-type': 'text/html'});
                    response.write(buffer.toString('utf-8',0,length));
                    response.end();
                    fs.close(handle,function(){
                        console.log('file closed');
                    })
                }
            })
        }
    })
});
server.listen(5000);
console.log('ready to accept new request');
