var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
   console.log('i have received a new request')
   var Filename= "bikes.txt";
   var content = 'hero honda suzuki ';
   fs.writeFile(Filename,content,function(err){
    if(err) 
        console.log("error while writing file");
    
    else
        console.log("file written successfully");
    
   })
});
server.listen(5000);
console.log('ready to accept new request')