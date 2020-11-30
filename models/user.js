const connection = require('./database.js');

// constructor
const user = function(user) {
  this.id = user.id;
  this.name = user.name;
};

user.findAll = result => {
 	connection.query('SELECT * FROM gcp_16206844e7c0034a1ea6.user', (err, res) => {
	    if (err) {
	       console.log("error: ", err);
	       result(null, err);
	       return;
	    }
	    //console.log("user: ", res);
	    result(null, res);
  });

};

module.exports = user;
