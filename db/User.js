const mongoose = require('mongoose');
const db = require('./index.js');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  registed_date: {
    type: Date,
    default: Date.now
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
