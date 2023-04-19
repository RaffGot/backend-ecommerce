const mongoose = require("mongoose");
const { MONGODB_COLLECTIONS } = require("../utils/constants");
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  dateInsert: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model(MONGODB_COLLECTIONS.USER, userSchema);
