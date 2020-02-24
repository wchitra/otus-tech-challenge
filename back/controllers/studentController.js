const Student = require('../models/student');

/**
 * Search for student by first name, last name, or both
 */
exports.search = function (req, res) {

  const query = req.query;
  const filter = {};

  if (query.first) {
    filter.first = new RegExp('^' + query.first, 'i');
  }

  if (query.last) {
    filter.last = new RegExp('^' + query.last, 'i');
  }

  Student.find(filter, function (err, results) {
    if (err) {
      res.sendStatus(400);
    }

    if (results) {
      res.status(200).json(results);
    } else {
      res.status(404).send(JSON.stringify({
        error: 'Error'
      }))
    }
  });
};

/**
 * Get student by id.
 */
exports.getById = function (req, res) {
  if (req.params.id) {
    Student.findById(req.params.id, function (err, result) {
      if (err) {
        res.sendStatus(400);
      }

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send(JSON.stringify({
          error: 'Error'
        }))
      }
    });
  } else {
    res.sendStatus(400);
  }
};
