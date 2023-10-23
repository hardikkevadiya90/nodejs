var express = require('express');
var app = express();
var route = "/math/:num1/:num2";

app.get(route, function (req, res) {
   let num1 = parseInt(req.params.num1);
   let num2 = parseInt(req.params.num2);
   let sum = num1 +num2;

   res.send('sum of ' + num1 + 'and' + num2 +'is '+ sum);
});
app.all("*",function(req,res){
   res.status(404);
   res.send('404-not found')
})

app.listen(5000);
console.log('express server is running...');
