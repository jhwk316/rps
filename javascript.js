
let userScore = 0; //keeps track of player score
let cpuScore = 0; //keeps track of computer score

function playRound (){
/*---------Player Selection Code---------*/
let user = prompt("Enter Rock, Paper, or Scissors. \n 5-round match");
    user = user.toLowerCase(); // makes user input case-insensitive
    console.log("Player Choice " + user); 

    /*---------Computer Selection Code---------*/
let choice = ["rock", "paper", "scissors"];
let cpu = choice[Math.floor(Math.random()*choice.length)]; //random computer choice. used .length so I can add additional options in the future without changing this line.
    cpu = cpu.toLowerCase(); // array is already lowercase so not entirely necessary
    console.log("Computer Choice " + cpu);    

    /*------Game Logic-------*/
    if (user === cpu){
        console.log("Tie");
    }

    else if ((user === "rock" && cpu === "scissors") ||
             (user === "paper" && cpu === "rock") ||
             (user === "scissors" && cpu === "paper")){
                console.log("Player Wins")
                return(userScore++);
            }

    else if ((user === "rock" && cpu === "paper") ||
             (user === "paper" && cpu === "scissors") ||
             (user === "scissors" && cpu === "rock")){
                console.log("Computer Wins")
                return(cpuScore++);
            }        

    else {
        console.log("Oops!")
    }        
}

/*--------------Game Scoring------------*/
function game(){
    for(let i = 1; i < 6; i++){//5 round game
        playRound();
        console.log(userScore, cpuScore);
}
/*-------End Game Message--------*/
    if(userScore > cpuScore) {
        console.log("Player Wins Game");
        alert("Congratulations! You Win");
    }

    else if (cpuScore > userScore) {
        console.log("Computer Wins Game");
        alert("Sorry! You Lose");
    }

    else {
        console.log("Tie")
        alert("Game ends in a tie!")
    }
} 

game();