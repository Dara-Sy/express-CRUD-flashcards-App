// Require pg-promise (remember to invoke here)
const pgp = require('pg-promise')();

// Require the plain object from './dbConfig.js'.
// We will pass this to pgp to connect to the database
// Log this to make sure it has all the properties we expect / that we exported correctly
const config = require('./dbConfig');

// Connect to the database
// feed db the object
const db = pgp(config);

module.exports = db;

