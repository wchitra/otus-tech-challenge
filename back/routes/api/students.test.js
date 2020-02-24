const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

/**
 * Indirectly tests teh student controller.
 */
describe('Test classes route', () => {

  beforeAll(async () => {
    mongoose.startSession();
  });

  afterAll(async () => {
    mongoose.disconnect();
  });

  test('responds to /api/students with 200', function testStudents(done) {
    request(app)
      .get('/api/students?first=joh')
      .expect(200, done);
  });

  test('responds to /api/students with 200 for no results', function testStudents(done) {
    request(app)
      .get('/api/students?first=sd')
      .expect(200, [], done);
  });

  test('responds to /api/students/:id', function testStudents(done) {
    Student.find({ first: 'John' }, function (err, result) {
      request(app)
        .get(`/api/students/${result[0].id}`)
        .expect(200, done);
    });
  });
});
