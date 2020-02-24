const router = require('express').Router();
const classController = require('../../controllers/classController');

/**
 * GET /api/classes
 * returns all classes
 */
router.get('/', classController.getClasses);

module.exports = router;
