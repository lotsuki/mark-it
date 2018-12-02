const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const documentSchema = new Schema ({
  title: String,
  url: String,
  subject: String,
  date: String

});

const Document = mongoose.model('Document', documentSchema);


module.exports = Document;
