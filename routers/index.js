const express = require("express");
const router = new express.Router();
const comData = require("../models/commerce");
const Data = require("../models/desc");

router.get("/", (req, res) => {
  res.send("Fuckdd off !");
});

//adding data to db
router.post("/data", async (req, res) => {
  try {
    const user = new comData(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    console.log(req.body);
  } catch (error) {
    res.status(404).send(error);
  }
});

//reading wholedata
router.get("/docs", async (req, res) => {
  try {
    const dta = await comData.find({}).sort({ ranking: 1 });
    res.status(201).send(dta);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Reading data by category
router.get("/docs/category/:category", async (req, res) => {
  try {
    const category = req.params.category;

    // // Use the .find() method to query data by category name
    const data = await comData.find({ category: category });
    if (!data || data.length === 0) {
      //   //   // Handle the case where the data is not found for the given category
      return res.status(404).send("Data not found");
    }
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});

// Reading data by company name
router.get("/docs/cmpny/:company", async (req, res) => {
  try {
    const company = req.params.company;

    // Use the .find() method to query data by company name
    const data = await comData.find({ company: company });

    if (!data || data.length === 0) {
      // Handle the case where the data is not found for the given company
      return res.status(404).send("Data not found");
    }

    res.status(200).send(data);
  } catch (error) {
    // res.status(500).send(error);
    res.send("Data not found");
  }
});

//adding data to db
router.post("/data1", async (req, res) => {
  try {
    const user = new Data(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    console.log(req.body);
  } catch (error) {
    res.status(404).send(error);
  }
});

//reading wholedata
router.get("/docs/basic", async (req, res) => {
  try {
    const dta = await Data.find({}).sort({ ranking: 1 });
    res.status(201).send(dta);
  } catch (error) {
    res.status(404).send(error);
  }
});

// getting by id
router.get("/docs/find", async (req, res) => {
  try {
    const id = req.query.id;

    // Use the .findOne() method to query data by id
    const data = await comData.findOne({ _id: id });

    if (!data) {
      // Handle the case where the data is not found for the given id
      return res.status(404).send("Data not found");
    }
    res.status(200).send(data);
  } catch (error) {
    console.log("Internal server error");
    res.status(500).send("Internal server error");
  }
});

// getting by id
router.get("/docs/basic/find", async (req, res) => {
  try {
    const id = req.query.id;

    console.log(id);

    // Use the .findOne() method to query data by id
    const data = await Data.findOne({ _id: id });

    if (!data) {
      // Handle the case where the data is not found for the given id
      return res.status(404).send("Data not found");
    }
    res.status(200).send(data);
  } catch (error) {
    console.log("Internal server error");
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
