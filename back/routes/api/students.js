const router = require('express').Router();
const studentController = require('../../controllers/studentController');

/**
 * GET /api/students
 * Query param
 *  first: first name
 *  last: last name
 * Returns all student that matches either the first, last, or both criteria
 */
router.get('/', studentController.search);


/**
 * GET /api/students/:id
 * Get student by id
 */
router.get('/:id', studentController.getById)

module.exports = router;
