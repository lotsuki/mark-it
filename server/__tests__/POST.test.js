/**
 * @jest-environment node
*/

const request = require('supertest');
const app = require('../index.js')
const db = require('../../db/index.js');


describe('POST requests', function() {
  afterAll(async done => {
    // Closing the DB connection allows Jest to exit successfully.
    await db.close();
    done();
  });

  const form = {
    category: 'Tech',
    subject: "Supertest",
    title: 'Tutorial',
    url: 'http://supertest/tutorial.com',
    date: '5-20-2019',
  };

  describe('/form', () => {
    it('responds with status 201 when form is valid', function(done) {
      request(app)
        .post('/form')
        .send(form)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done)
    });
    it('responds with json', function(done) {
      request(app)
        .post('/form')
        .send(form)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/, done)
    });
    // it('responds with status 400 when form is invalid', function(done) {
    //   request(app)
    //     .post('/form')
    //     .set('Accept', 'application/json')
    //     .expect('Content-Type', /json/)
    //     .expect(400, done)
    // });
  });

});