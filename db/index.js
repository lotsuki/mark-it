const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/mydocapp';
const Document = require('./Document.js');
const moment = require('moment');

mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  autoIndex: true
});

const db = mongoose.connection
  .once('open', () => {
    console.log('Connected to MongoDb');
  })
  .on('error', () => {
    console.log('Cannot connect')
  });

db.dropCollection('documents');

Document.create({
  title: 'String Methods',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
  subject: 'String',
  date: moment().format('MM-DD-YYYY')
})
.then(() => {
  db.close();
})
.catch(err => console.log('err', err))

console.log(moment().format('YYYYMMDD'))
module.exports = db;


