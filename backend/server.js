const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();





app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});