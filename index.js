require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/shub", (req, res) => {
  res.send("shubh pe bhi sun rha hu");
});

app.listen(proces.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
