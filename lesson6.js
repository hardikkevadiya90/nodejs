var http = require("http");
var server = http.createServer(function(request,response){
    var url = request.url;
    response.writeHead(200,{"content-type":"text/html"});
    if (url == "/") {
        response.write("<html><head></head><body><h1>HOME</h1></body></html>");
    }
    else if (url == "/aboutus") {
        response.write("<html><head></head><body><h1>About us</h1></body></html>");
    }
    else if (url == "/contactus") {
        response.write("<html><head></head><body><h1>Contact Us us</h1></body></html>");
    }
    else if (url == "/offers") {
        response.write("<html><head></head><body><h1>Offers</h1></body></html>");
    };
    response.end();

});
console.log("ready to accept request....");
server.listen(5000);