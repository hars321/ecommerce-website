<<<<<<< HEAD
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var path=require('path');
// var SignupTry=require('./Signup.js');
// var SigninTry=require('./Signin.js');
//var connectToServer=require('./database-connection.js');



app.use(express.urlencoded())
app.use(express.static('public'));

var fs = require('fs');

// app.post('/login-seller',(req,res)=>{
//    var table=[]
//    table=req.body;
//    var value=0;
//    var k=SigninTry.sellersignintry(table,value).then(console.log("def"+value));
    
    
//    if(value==1){
//       res.sendFile(path.join(__dirname,'login-seller.html'));
//    }
//    else{
//       res.sendFile(path.join(__dirname,'login.html'));
//    }
   
// });
// app.post('/login-buyer',(req,res)=>{
//    var table=[];
//    table=req.body;
//    SigninTry.buyersignintry(table);
//    res.sendFile(path.join(__dirname,'login-seller.html'));
// });
// app.post('/signup-seller',(req,res)=>{
//    var table=[]
//    table=req.body;//.name,req.body.username,req.body.password}
//    SignupTry.Sellersignuptry(table);
//    res.sendFile(path.join(__dirname,'login-seller.html'));
// });
// app.post('/signup-buyer',(req,res)=>{
//    var table=[]
//    table=req.body;
//    SignupTry.Buyersignuptry(table);
//    res.sendFile(path.join(__dirname,'login-seller.html'));
// })

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

app.listen(process.env.PORT|| 8080 , ()=> {
   console.log( "Listening " );
=======
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var path=require('path');
// var SignupTry=require('./Signup.js');
// var SigninTry=require('./Signin.js');
//var connectToServer=require('./database-connection.js');



app.use(express.urlencoded())
app.use(express.static('public'));

var fs = require('fs');

// app.post('/login-seller',(req,res)=>{
//    var table=[]
//    table=req.body;
//    var value=0;
//    var k=SigninTry.sellersignintry(table,value).then(console.log("def"+value));
    
    
//    if(value==1){
//       res.sendFile(path.join(__dirname,'login-seller.html'));
//    }
//    else{
//       res.sendFile(path.join(__dirname,'login.html'));
//    }
   
// });
// app.post('/login-buyer',(req,res)=>{
//    var table=[];
//    table=req.body;
//    SigninTry.buyersignintry(table);
//    res.sendFile(path.join(__dirname,'login-seller.html'));
// });
// app.post('/signup-seller',(req,res)=>{
//    var table=[]
//    table=req.body;//.name,req.body.username,req.body.password}
//    SignupTry.Sellersignuptry(table);
//    res.sendFile(path.join(__dirname,'login-seller.html'));
// });
// app.post('/signup-buyer',(req,res)=>{
//    var table=[]
//    table=req.body;
//    SignupTry.Buyersignuptry(table);
//    res.sendFile(path.join(__dirname,'login-seller.html'));
// })

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

app.listen(process.env.PORT|| 8080 , ()=> {
   console.log( "Listening " );
>>>>>>> my commit
 });