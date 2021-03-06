const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true
  },
  password:{
      type:String,
      required:true,
      trim: true
  },
  email:{
      type:String,
      required: true,
      trim:true
  }
});

module.exports = mongoose.model('Users', schema);