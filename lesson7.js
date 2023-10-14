var http = require("http");
var server = http.createServer(function(request,response){
    var url = request.url;
    console.log(url);
    response.writeHead(200,{'content-type':'application/json'});
    var data= null;
    if (url =="/india") {
        var indiaDetail = [{
            name :'India',
            population : '1380004385',
            capital:'New Delhi',
            numberofstates:'28'
        }];
        data = JSON.stringify(indiaDetail);

    };
    if (url =="/japan") {
        var japanDetail = [{
            name :'japan',
            population : '126529100',
            capital:'Tokyo',
            numberofstates:'47'
        }];
        data = JSON.stringify(japanDetail);

    };
    if (url =="/uk") {
        var ukDetail = [{
            name :'United Kingdom',
            population : '66435550',
            capital:'London',
            numberofcountry:'4'
        }];
        data = JSON.stringify(ukDetail);

    };
    response.write(data);
    response.end();
});
server.listen(5000);
console.log("ready to accept request");