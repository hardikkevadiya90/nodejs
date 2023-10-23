var express = require('express');
var app = express();
app.get('/', function (req, res) {
   res.send('Home Page');
});
app.get('/contactus', function (req, res) {
   res.send('Contact Us')
});
app.get('/aboutus',function(req,res){
   res.send('About Us')
});
app.listen(5000);
console.log('express server is running...');
