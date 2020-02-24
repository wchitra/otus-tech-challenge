const Class = require('../models/class');

/**
 * Get all classes
 */
exports.getClasses = function (req, res) {
  Class.find({}, 'id name', function (err, result) {
    if (err) {
      res.sendStatus(400);
    }

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).send(JSON.stringify({
        error: 'Error'
      }))
    }
  });
}
