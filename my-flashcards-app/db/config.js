//argumanet we will pass into pgp promise when created
const options = {
  query: (e) => {
    console.log(e.query);
  }
}

//pgp promise connects to our postgres database
//allowing us to query our data
const pgp = require('pg-promise')(options);

//Function below will set up the connection to our database
//Since we are in development mode, pgp will set the default port for our local enviornment
//We also identify the name databse we are working with
function setDatabase() {
    if (promise.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
      return pgp({
        database: 'tc_flashcards_dev',
        port: 5432,
        host: 'localhost',
      });
    }else if (process.env.NODE_ENV === 'production') {
      return pgp(process.env.DATABSE_URL);
    }
}

//assigning function to variable db
const db = setDatabase();

//Our query tool is exported for access by our model
module.exports = db;
