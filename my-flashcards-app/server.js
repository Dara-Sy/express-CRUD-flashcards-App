//Importing the express module
const express = require('express');

//Importing morgan. Allows us to see a log of requets sent to server
const logger = require('morgan');

//Path will let us specify our path without having to write it all out
//using the join method
const path = require('path');

//bodyParser module allows us to parse our data any we like before recieving it
//In this case we want a json object
const bodyParser = require('body-parser');

//This module will override the GET & POST methods to be able tu use the DELETE & PUT methods
const methodOverride = require('method-override');

//here we are initializing an instance of express
const app = express();

//We set the port number, incase we do not have an enviornmental variable declaring our port
const PORT = process.env.PORT || 3000;

//We are logging out port number every time the server is started
app.listen(PORT, () => {
  console.log(`🚤    ⚠️${PORT}⚠️    🛳`);
});
