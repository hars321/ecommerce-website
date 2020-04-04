<<<<<<< HEAD
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'e-shopdb'
})

connection.connect(function(err) {
  if (err){
      console.log('error connecting');
  }
  else{
    console.log('You are now connected...');
  }
});

=======
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'e-shopdb'
})

connection.connect(function(err) {
  if (err){
      console.log('error connecting');
  }
  else{
    console.log('You are now connected...');
  }
});

>>>>>>> my commit
exports.connection=connection;