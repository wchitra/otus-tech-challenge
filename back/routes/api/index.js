const router = require('express').Router();

// maps to /api/classes/
router.use('/classes', require('./classes'));

// maps to /api/students/
router.use('/students', require('./students'));

// register more routes here

module.exports = router;
