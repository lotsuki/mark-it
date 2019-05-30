// /**
//  * @jest-environment node
// */

// const request = require('supertest');
// const app = require('../index.js')
// const db = require('../../db/index.js');



// describe('HTTP requests', () => {
//   afterAll(async done => {
//     // Closing the DB connection allows Jest to exit successfully.
//     await db.close();
//     done();
//   });

//   const form = {
//     category: 'Tech',
//     subject: "Supertest",
//     title: 'Tutorial',
//     url: 'http://supertest/tutorial.com',
//     date: '5-20-2019',
//   };

//   describe('GET requests', function() {
//     it('/ should respond to GET request', async (done) => {
//       request(app)
//         .get('/')
//         .expect(200, done)
//     });
//     it('/ should respond with text.html', async (done) => {
//       request(app)
//         .get('/')
//         .expect('Content-Type', /text.html/)
//         .expect(200, done)
//     });
//     it('/user should respond with correct document', async (done) => {
//       request(app)
//         .get('/user')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(res => {
//           res.body[0]._id = 'id',
//           res.body[0].username = 'username';
//           res.body[0].password = 'password';
//           res.body[0].category = 'Travel';
//           res.body[0].subject = 'USA';
//           res.body[0].title = 'Todo in SF';
//           res.body[0].url = 'http://todo-in-sf.com';
//           res.body[0].date = '5-20-2019';
//           res.body[0].bmarks = {};
//         }, done)
//         .expect(200, [{
//           _id: 'id',
//           category: 'Travel',
//           subject: 'USA',
//           title: 'Todo in SF',
//           url: 'http://todo-in-sf.com',
//           date: '5-20-2019',
//           username: 'username',
//           password: 'password',
//           bmarks: {},
//           __v: 0
//         }], done)
//     });
//      it('/titles should respond to GET request', async (done) => {
//       request(app)
//         .get('/titles')
//         .expect(200, done)
//     });
//      it('/titles should respond with json', async (done) => {
//       request(app)
//         .get('/titles')
//         .expect('Content-Type', /json/, done)
//         .expect(200, done)
//     });
//   });


//   describe('POST requests', function() {
//     it('responds with status 201 when form is valid', function(done) {
//       request(app)
//         .post('/form')
//         .send(form)
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(201, done)
//     });
//     it('responds with json', function(done) {
//       request(app)
//         .post('/form')
//         .send(form)
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/, done)
//     });
//     // it('responds with status 400 when form is invalid', function(done) {
//     //   request(app)
//     //     .post('/form')
//     //     .set('Accept', 'application/json')
//     //     .expect('Content-Type', /json/)
//     //     .expect(400, done)
//     // });
//   });
// });


