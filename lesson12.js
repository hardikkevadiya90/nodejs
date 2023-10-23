var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response){
    console.log("I have received new request....");
    var filename = "mobiles.txt";
    var content = "/n vivo oppo realme ";
    fs.appendFile(filename,content,function(err){
        if(err)
            console.log("Error while writing file");
        else 
            console.log("File written successfully");
    });
});
server.listen(5000);
console.log("ready to accept new request....");