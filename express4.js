var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({'extended':false}));
app.use(bodyParser.json());

app.post("/login",function(request,response){
    var email = request.body.email;
    var password = request.body.password;
    response.send("Email: " + email + "<br/>Password: " + password);
});

app.post("/register",function(request,response){
    var email = request.body.email;
    var password = request.body.password;
    var mobile = request.body.mobile;
    var fullname = request.body.fullname;
    response.send("Email: " + email + "<br/>Password: " + password + "<br/>Mobile: " + mobile + "<br/>Fullname: " + fullname);
});

app.post("/change-password",function(request,response){
    var userid = request.body.userid;
    var password = request.body.password;
    var newpassword = request.body.newpassword;
    response.send("Userid: " + userid + "<br/>Password: " + password + "<br/>New Password: " + newpassword);
});
app.listen(5000);
console.log("Express server running");