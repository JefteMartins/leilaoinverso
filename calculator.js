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
    let index = vetorNum.indexOf(dupChars[0])
  if (index > -1) {
    altVetor.splice(index, 2); // 2nd parameter means remove one item only
  }
  resultado = Math.min(...altVetor)
  res.send("Os números inseridos válidos são " + vetorNum + "<br/>O menor número inserido não repetido é é "+ resultado)
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
function sortfunction(a, b){
  return (a - b)
}
