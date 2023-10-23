var express = require('express');
var app = express();
var route = "/categary";
app.get(route, function (req, res) {
   res.send('get request received for categary');
});
app.post(route, function (req, res) {
   res.send('post request received for categary')
});
app.put(route,function(req,res){
   res.send('put request received for categary')
});
app.delete(route,function(req,res){
    res.send('delete request received for categary')
 });
app.listen(5000);
console.log('express server is running...');
