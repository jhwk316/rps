
let userScore = 0; //keeps track of player score
let cpuScore = 0; //keeps track of computer score

function playRound ()
/*---------Player Selection Code---------*/
let user = prompt("Enter Rock, Paper, or Scissors. \n 5-round match");
    user = user.toLowerCase(); // makes user input case-insensitive
    console.log("Player Choice" + user); 