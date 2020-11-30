module.exports = app => {
    const user = require('../controllers/user.controller.js');

// Find costumers
app.get("/user", user.findAll);

};