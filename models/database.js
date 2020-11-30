const mysql = require('mysql');

//connection 
const connection = mysql.createConnection({
	host     : 'us-cdbr-gcp-east-01.cleardb.net',
	user     : 'b7f5db020d2089',
	password : '0ffefee8',
	database : 'gcp_16206844e7c0034a1ea6'
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  //console.log("Successfully connected to the database.");
});

module.exports = connection;