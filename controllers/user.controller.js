const user = require('../models/user.js');


// findAll
exports.findAll  = (req, res) => {
   	user.findAll((err, data) => {
    if (err)
	    res.status(500).send({
	        message:
	          err.message || 'Error retrieving users.'
	      	});
	else res.send(data);
  });
};