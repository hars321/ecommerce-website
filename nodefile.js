var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var path=require('path');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 

var fs = require('fs');


app.use(express.static(path.join(__dirname,'/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function(req, res){
   res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/index',function(req,res){
   res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/login',(req,res)=>{
   res.sendFile(path.join(__dirname,'login.html'));
});
app.get('/shop',(req,res,next)=>{
   res.sendFile(path.join(__dirname,'login.html'));
   next();
   
});
app.get('/shop/:id',(req,res)=>{
   res.sendFile(path.join(__dirname,'shop.html'));
      
})

app.get('/signup',(req,res)=>{
   res.sendFile(path.join(__dirname,'signup.html'),);
});

app.listen(server_port, server_ip_address, function () {
   console.log( "Listening on " + server_ip_address + ", port " + server_port )
 });