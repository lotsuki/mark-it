const mongoose = require('mongoose');
const db = require('../index.js');

const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   firstname: {
//     type: String,
//     required: true
//   },
//   lastname: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   registed_date: {
//     type: Date,
//     default: Date.now
//   },
// });

const DocumentSchema = new Schema ({
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


const Document = mongoose.model('Document', DocumentSchema);
//const User = mongoose.model('User', UserSchema);

module.exports = Document;

