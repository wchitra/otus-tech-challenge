const mongoose = require('mongoose');
const Student = require('./student');

describe('Test student', () => {

  beforeAll(async () => {
    const dbName = 'otus';
    mongoose.connect(`mongodb://localhost/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  test('gpa', (done) => {
    Student.find({ first: 'John' }, function (err, result) {
      expect(result[0].gpa).toEqual('3.17')
      done()
    });
  });
});