const mongoose = require('mongoose');
const db = require('./index.js');

const Schema = mongoose.Schema;


const documentSchema = new Schema ({
  category: String,
  subject: String,
  title: String,
  url: String,
  date: String,
  username: String,
  password: String,
},
{
  strict: false
});


const Document = mongoose.model('Document', documentSchema);

module.exports = Document;

