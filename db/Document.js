const mongoose = require('mongoose');
const db = require('./index.js');

const Schema = mongoose.Schema;

// const documentSchema = new Schema ({
//   category: String,
//   subject: String,
//   sites: [{
//     title: String,
//     url: String,
//     date: String,
//     starred: Boolean,
//     favorites: Boolean
//   }]
// });

const documentSchema = new Schema ({
  category: String,
  subjects: [{
    subject: String,
    sites: [{
      title: String,
      url: String,
      date: String,
      starred: Boolean,
      favorites: Boolean
    }]
  }]
});


const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
