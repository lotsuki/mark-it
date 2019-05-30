/**
 * @jest-environment node
*/

const request = require('supertest');
const app = require('../index.js')
const db = require('../../db/index.js');

describe('HTTP requests', () => {
  afterAll(async done => {
    // Closing the DB connection allows Jest to exit successfully.
    await db.close();
    done();
  });

  it('should response to GET request', async (done) => {
    request(app).get('/').expect(200, done);
  });
});



