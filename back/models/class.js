const mongoose = require('mongoose');

const schemaOptions = {
  toObject: {
    virtuals: true

  }, toJSON: {
    virtuals: true
  }
};

const ClassSchema = new mongoose.Schema({
  id: Number,
  name: String
}, schemaOptions);

module.exports = mongoose.model('Class', ClassSchema);
