var express = require("express"),
  http = require("http"),
  bodyParser = require('body-parser'),
  app = express(),
  choice,
  result = {
    outcome:"",
    wins:0,
    losses:0,
    ties:0
  },
  choices = ["rock", "paper","scissors", "spock", "lizard"];

app.use(express.static(__dirname + "/client"));

  // tell Express to parse incoming
  // JSON objects
app.use(bodyParser.urlencoded({extended:true}));

http.createServer(app).listen(3000);


app.post("/play/:move", function (req, res) {
  var serverC = Math.floor(Math.random()*5),
   userC = parseInt(req.body.chose);
   //console.log(userC);
  computeResult(userC, serverC);
  res.json(JSON.stringify(result));
});



function computeResult(userChoice, serverChoice) {

  if(userChoice == (serverChoice+1)%5 || userChoice == (serverChoice+3)%5) {
    result.wins++;
    result.outcome = "win";
  }
  else if(serverChoice == (userChoice+1)%5 || serverChoice == (userChoice+3)%5) {
    result.losses++;
    result.outcome = "lose";
  }
  else if(serverChoice == userChoice){
    result.ties++;
    result.outcome = "tie";
  }
  else {
    result.outcome = "error";
  }
  console.log("user:"+choices[userChoice]+userChoice+" server:"+choices[serverChoice]+serverChoice+" -> "+result.outcome);

}
