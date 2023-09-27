const { json } = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const DB = process.env.URL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((e) => {
    console.log("connection successful:");
  })
  .catch((e) => {
    console.log(`error:${e} no connection`);
  });
