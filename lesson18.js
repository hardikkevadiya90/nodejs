var http=require('http');
var url = require('url');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    var myurl = url.parse(request.url,true);
    console.log(myurl);
    var data= myurl.query;
    var num1 = parseInt(data.num1);
    var num2 = parseInt(data.num2);
    var sum = num1 + num2;
    var sub = num1 - num2;
    var mul = num1 * num2;
    var div = num1 / num2;
    var result = 'sum :'+ sum + '<br/>'+ 'sub : ' + sub + '<br/> '+'mul :'+mul+'<br/>'+'div : '+div 
    response.write(result);
    response.end();



});
server.listen(5000);
console.log('ready to accept new request');
