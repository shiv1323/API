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
    type: String,
  },
  image: {
    type: String,
  },
  comapany: {
    type: String,
  },
  category: {
    type: String,
  },
  featured: {
    type: Boolean,
  },
  shipping: {
    type: Boolean,
  },
  delete: {
    type: String,
  },
  offer: {
    type: String,
  },
});

const comData = new Mongoose.model("comData", data);

module.exports = comData;
