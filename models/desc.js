const Mongoose = require("mongoose");

const data = new Mongoose.Schema({
  url: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },

  rating: {
    type: String,
  },
  description: {
    type: String,
  },
  shipping: {
    type: Boolean,
  },
  InStock: {
    type: String,
  },
  delete: {
    type: String,
  },
  discount: {
    type: String,
  },
  reviews: {
    type: String,
  },
});

const Data = new Mongoose.model("basicData", data);

module.exports = Data;
