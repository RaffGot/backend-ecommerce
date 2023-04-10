const mongoose = require("mongoose");
const { MONGODB_COLLECTIONS } = require("../utils/constants");
const Schema = mongoose.Schema;

// product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  numReviews: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  dateInsert: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Product = mongoose.model(
  MONGODB_COLLECTIONS.PRODUCT,
  productSchema
);
