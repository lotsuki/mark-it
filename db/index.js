const mongoose = require('mongoose');
//const uri = 'mongodb://localhost:27017/mydocapp';
const uri = 'mongodb+srv://lotsuki:Masteroffate@bookmarks-flslu.mongodb.net/mydocapp';

mongoose.Promise = global.Promise;

mongoose.connect(uri, {
  useNewUrlParser: true,
  autoIndex: true
});

const db = mongoose.connection
  .once('open', () => {
    console.log('Connected to MongoDB');
  })
  // .catch(err => { console.log('Cannot connect to MongoDB')})
  .on('error', () => {
    console.log('Cannot connect to MongoDB')
  })
  .on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = db;


