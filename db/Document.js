const mongoose = require('mongoose');
const db = require('./index.js');

const Schema = mongoose.Schema;

//test different schemas

const documentSchema = new Schema ({
  isQuicklink: Boolean,
  category: String,
  subjects: [{
    subject: String,
    sites: [{
      title: String,
      url: String,
      date: String
    }]
  }]
});

// const documentSchema = new Schema ({
//   header: String,
//   categories: [{
//     category: String,
//     subjects: [{
//       subject: String,
//       sites: [{
//         title: String,
//         url: String,
//         date: String
//       }]
//     }]
//   }]

// });


const Document = mongoose.model('Document', documentSchema);

module.exports = Document;


//first load page
//add quicklink
//add bookmark to quicklink