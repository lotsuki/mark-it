/**
 * @jest-environment node
*/

const request = require('supertest');
const app = require('../index.js')
const db = require('../../db/index.js');


describe('GET requests', () => {
  afterAll(async done => {
    // Closing the DB connection allows Jest to exit successfully.
    await db.close();
    done();
  });

  describe('/', () => {
    it('should respond to GET request', async (done) => {
      request(app)
        .get('/')
        .expect(200, done)
    });
    it('should respond with text.html', async (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', /text.html/)
        .expect(200, done)
    });
  });
  describe('/user', () => {
    it('should respond to GET request', async (done) => {
      request(app)
        .get('/user')
        .expect(200, done)
    });
    it('should respond with json', async (done) => {
      request(app)
        .get('/user')
        .expect('Content-Type', /json/)
        .expect(200, done)
    });
    it('should respond with correct document', async (done) => {
      request(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res => {
          res.body[0]._id = 'id',
          res.body[0].username = 'username';
          res.body[0].password = 'password';
          res.body[0].category = 'Travel';
          res.body[0].subject = 'USA';
          res.body[0].title = 'Todo in SF';
          res.body[0].url = 'http://todo-in-sf.com';
          res.body[0].date = '5-20-2019';
          res.body[0].bmarks = {};
        }, done)
        .expect(200, [{
          _id: 'id',
          category: 'Travel',
          subject: 'USA',
          title: 'Todo in SF',
          url: 'http://todo-in-sf.com',
          date: '5-20-2019',
          username: 'username',
          password: 'password',
          bmarks: {},
          __v: 0
        }], done)
    });
  });
  describe('/titles', () => {
    it('should respond to GET request', async (done) => {
      request(app)
        .get('/titles')
        .expect(200, done)
    });
    it('should respond with json', async (done) => {
      request(app)
        .get('/titles')
        .expect('Content-Type', /json/)
        .expect(200, done)
    });
  });
  describe('/titles/:category/:subject', () => {
    it('should respond to GET request', async (done) => {
      request(app)
        .get('/titles/:category/:subject')
        .expect(200, done)
    });
    it('should respond with json', async (done) => {
      request(app)
        .get('/titles/:category/:subject')
        .expect('Content-Type', /json/)
        .expect(200, done)
    });

  });
  describe('/update/cat/:defaultVal/:newVal', () => {
    it('should respond to GET request', async (done) => {
      request(app)
        .get('/update/cat/:defaultVal/:newVal')
        .expect(200, done)
    });
    it('should respond with json', async (done) => {
      request(app)
        .get('/update/cat/:defaultVal/:newVal')
        .expect('Content-Type', /json/)
        .expect(200, done)
    });

  });
});



