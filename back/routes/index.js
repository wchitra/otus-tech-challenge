const router = require('express').Router();

// set the URL to begin with /api/<something>
router.use('/api', require('./api'));

// if you want to have your route start with something, ex: /student
// then create a folder called 'student' and create your routes there
// also make sure there is an index.js in that folder too, see /api folder
// for an example
// router.use('/student', require('./student));

// all routes map to a controller class
// where the business logic resides
// please see route classes for example

module.exports = router;
