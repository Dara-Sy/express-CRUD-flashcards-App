// Connect pg-promise to your database here
// Require pg-promise (remember to invoke here)
// This is an opportunity to pass initial configuration but we are happy with defaults.
// See http://vitaly-t.github.io/pg-promise/ for more details
const pgp = require('pg-promise')();

// Require the plain object from './dbConfig.js'.
// We will pass this to pgp to connect to the database
// Log this to make sure it has all the properties we expect / that we exported correctly
const config = require('./dbConfig');

// Connect to the database
const db = pgp(config);

module.exports = db;