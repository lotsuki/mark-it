const mongoose = require('mongoose');
const db = require('./index.js');

const Schema = mongoose.Schema;

const documentSchema = new Schema ({
  subject: String,
  sites: [{
    title: String,
    url: String,
    date: String
  }]
});

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
