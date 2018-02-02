const supertest = require('supertest');
const server = require('./validation');

test('server should return the success code', (done) => {
  supertest(server.listener).get('/chickens/breed')
    .then((response) => {
      expect(response.status).toBe(200);
      done();
    });
});
