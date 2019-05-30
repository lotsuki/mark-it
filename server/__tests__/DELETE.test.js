/**
 * @jest-environment node
*/

const request = require('supertest');
const app = require('../index.js')
const db = require('../../db/index.js');


describe('DELETE requests', () => {
  afterAll(async done => {
    // Closing the DB connection allows Jest to exit successfully.
    await db.close();
    done();
  });

  describe('/delete/title/:title', () => {
    it('should respond to DELETE request', async (done) => {
      request(app)
        .delete('/delete/title/:title')
        .expect(200, done)
    });
    it('should respond with json', async (done) => {
      request(app)
        .delete('/delete/title/:title')
        .expect('Content-Type', /json/, done)
    });
  });

  describe('/bookmarks/:title/:subject', () => {
    it('should respond to DELETE request', async (done) => {
      request(app)
        .delete('/bookmarks/:title/:subject')
        .expect(200, done)
    });
    it('should respond with json', async (done) => {
      request(app)
        .delete('/bookmarks/:title/:subject')
        .expect('Content-Type', /json/)
        .expect(200, done)
    });
  });
});