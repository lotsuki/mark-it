const mongoose = require('mongoose');
const db = require('./index.js');

const Schema = mongoose.Schema;

//test different schemas

// const documentSchema = new Schema ({
//   username: String,
//   password: String,
//   qlinks: Array,
//   bmarks: Array
// });

const documentSchema = new Schema ({
  category: String,
  subject: String,
  title: String,
  url: String,
  date: String,
  username: String,
  password: String,
  qlinks: Array,
  bmarks: Array
});

//Quicklink schema
//add on click event
// {
//   id: hashed index,
//   isQuicklink: boolean,
//   category: category,
//   subject: subject, (optional),
//   title: string,
//   url: string,
//   date: string,
//   starred/favorites/read: boolean
// }



const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
