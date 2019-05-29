const mongoose = require('mongoose');
const db = require('./index.js');

const Schema = mongoose.Schema;

//test different schemas


const documentSchema = new Schema ({
  category: String,
  subject: String,
  title: String,
  url: String,
  date: String,
  username: String,
  password: String,
  bmarks: Object
}, {
  strict: false
});


const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
