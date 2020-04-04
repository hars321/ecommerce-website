var mysql=require('mysql');
var dbconn=require('./database-connection.js');


 async function sellersignintry(table,value){
     
    //dbconn.connection.query("INSERT INTO `login-seller`(`username`, `password`) VALUES ("+'"'+table.username+'"'+","+'"'+table.password+'"'+")");
    
    dbconn.connection.query('SELECT `username`,`password` FROM `signup-seller` WHERE username="'+table.username+'" && ' + 'password="'+table.password+'"',(err,result,fields)=>{
         value=result.length;
         console.log(value);
         return value;
    
    });
    
};

function buyersignintry(table){
    
   
   dbconn.connection.query("INSERT INTO `login-buyer`(`username`, `password`) VALUES ("+'"'+table.username+'"'+","+'"'+table.password+'"'+")");
};
exports.sellersignintry=sellersignintry;
var mysql=require('mysql');
var dbconn=require('./database-connection.js');


 async function sellersignintry(table,value){
     
    //dbconn.connection.query("INSERT INTO `login-seller`(`username`, `password`) VALUES ("+'"'+table.username+'"'+","+'"'+table.password+'"'+")");
    
    dbconn.connection.query('SELECT `username`,`password` FROM `signup-seller` WHERE username="'+table.username+'" && ' + 'password="'+table.password+'"',(err,result,fields)=>{
         value=result.length;
         console.log(value);
         return value;
    
    });
    
};

function buyersignintry(table){
    
   
   dbconn.connection.query("INSERT INTO `login-buyer`(`username`, `password`) VALUES ("+'"'+table.username+'"'+","+'"'+table.password+'"'+")");
};
exports.sellersignintry=sellersignintry;
exports.buyersignintry=buyersignintry;