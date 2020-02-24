const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');

/**
 * Indirectly tests teh class controller.
 */
describe('Test classes route', () => {

  afterAll(async () => {
    mongoose.disconnect();
  });

  test('responds to /api/classes', function testClasses(done) {
    request(app)
      .get('/api/classes')
      .expect(200, done);
  });
});
