const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
var vetorNum = [8,12,14,16]
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  let num1 = Number(req.body.num1);
  vetorNum.push(num1)
  resultado = Math.min(...vetorNum)
  vetorNum = vetorNum.sort(sortfunction)
  var altVetor = vetorNum
  let dupChars = vetorNum.filter((element, index) => {
    return vetorNum.indexOf(element) !== index;
});

