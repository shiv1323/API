const Mongoose = require("mongoose");

const data = new Mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  desc: {
    type: String,
  },
  rating: {
    type: Number,
  },
  image: {
    type: String,
  },
  company: {
    type: String,
  },
  category: {
    type: String,
  },
  delete: {
    type: String,
  },
  offer: {
    type: String,
  },
  reviews: {
    type: Number,
  },
  inStock: {
    type: Number,
  },
  featured: {
    type: Boolean,
  },
});

const comData = new Mongoose.model("comData", data);

module.exports = comData;
