/**
 * This file is the heart & soul of the application. This is where all the
 * configuration and routes gets loaded and initialized.
 */

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// CORS setting to allow the front-end application to communicate with API
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// http logger to view traffic info
app.use(morgan('tiny'));

// MongoDB connection
const dbName = 'otus';
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('debug', true);

// load all the routes to be used in the application
// this is where the business logic and CRUD operations will happen
app.use(require('./routes'));

module.exports = app
