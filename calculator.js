const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var vetorNum = [8,12,14,16]
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});


