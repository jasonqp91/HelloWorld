const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const request = require('request');
const bodyParser = require("body-parser");
require("./routes/user.routes.js")(app);

// set port, listen for requests
app.listen(port, () => {
  //console.log('Listening on port %s.', port);
});
