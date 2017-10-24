//Importing the express module
const express = require('express');

//Importing morgan module
const logger = require('morgan');

//Importing path module
const path = require('path');


//Importing body-parser module
const bodyParser = require('body-parser');

//This module will override the GET & POST methods to be able tu use the DELETE & PUT methods
const methodOverride = require('method-override');

//here we are initializing an instance of express
const app = express();

//We set the port number, incase we do not have an enviornmental variable declaring our port
const PORT = process.env.PORT || 3000;

//We are logging our port number every time the server is started, sent a request
app.listen(PORT, () => {
  console.log(`🚤    ⚠️${PORT}⚠️    🛳`);
});

//We can specify our path without having to write it all out
//using the join method from the path module
//We are setting out view engine to recognize ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Allows us to see a log of the requets type and response status
app.use(logger('dev'));

//On any requests made, the sever will access our static files in the public directory
//We indicate the path using the join method
app.use(express.static(path.join(__dirname, 'public')));

//body-parser will parse our response data into  a json object on any request
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

//This will allow us to override any method we specify in the forms
 //contained in our view ejs files
app.use(methodOverride('_method'));

//Upon receiving a GET request to the root path,
//the server will render the index.ejs file to the user
app.get('/', (req, res) => {
  res.render('index');
});

//Importing our flashcard routes file to direct requests made to the /flashcards path
const flashcardRoutes = require('./routes/flashcard-routes');
app.use('/flashcards', flashcardRoutes);

//Will handle any errors on the client side
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});
