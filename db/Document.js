const mongoose = require('mongoose');
const db = require('./index.js');

const Schema = mongoose.Schema;

//test different schemas

const documentSchema = new Schema ({
  id: Number,
  username: String,
  password: String,
  qlinks: Array,
  bmarks: Array
});



const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
