const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/mydocapp';

mongoose.Promise = global.Promise;

mongoose.connect(uri, {
  useNewUrlParser: true,
  autoIndex: true
});

const db = mongoose.connection
  .once('open', () => {
    console.log('Connected to MongoDB');
  })
  .on('error', () => {
    console.log('Cannot connect to MongoDB')
  });

module.exports = db;


