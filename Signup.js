var mysql=require('mysql');
var dbconn=require('./database-connection.js');

// sellerSignupTry=(table)=>{
//     connection.query(`INSERT INTO signup-seller (name, username, password) VALUES ('${table.name}', '${table.username}', '${table.password}');`, function(err, result) {
//         if (err) throw err;
// };
 function Sellersignuptry(table){
    
    dbconn.connection.query("INSERT INTO `signup-seller`( `name`, `username`, `password`) VALUES ("+'"'+ table.name+'"'+","+'"'+table.username+'"'+","+'"'+table.password+'"'+")");
};
function Buyersignuptry(table){
    
    dbconn.connection.query("INSERT INTO `signup-buyer`( `name`, `username`, `password`) VALUES ("+'"'+ table.name+'"'+","+'"'+table.username+'"'+","+'"'+table.password+'"'+")");
};
exports.Sellersignuptry=Sellersignuptry;
exports.Buyersignuptry=Buyersignuptry;