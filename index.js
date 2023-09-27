const express = require("express");
const app = express();
app.use(express.json());
require("./db/connection");
const dotenv = require("dotenv");
const router = require("./routers/index");

const PORT = process.env.PORT || 8080;

// dotenv
dotenv.config({ path: "./config.env" });

// listening server on PORT number

app.use(router);

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
