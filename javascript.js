
let userScore = 0; //keeps track of player score
let cpuScore = 0; //keeps track of computer score


const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const pWinner = document.querySelector('#pWinner');//displays message if player wins
const cWinner = document.querySelector('#cWinner');//displays message if computer wins
const computerChoice = document.querySelector('#computerChoice');
const playerChoice = document.querySelector('#playerChoice');
const roundWinner = document.querySelector('#roundWinner');

//displays restart button
const selections = document.querySelector('#button')
const newGame = document.querySelector('#playAgain');
    const playAgain = document.createElement('button');

function restart() {
    window.location.reload();
}

/*---------Player Selection Code---------*/

/*--Need to combine these into a single forEach statement-- */
const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        playerChoice.textContent = 'Player Chooses Rock';
        playRound('Rock');
    });

const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        playerChoice.textContent = "Player Chooses Paper";
        playRound('Paper');

    });

const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        playerChoice.textContent = "Player Chooses Scissors";
        playRound('Scissors');
    });
    
const lizard = document.querySelector('#lizard');
    lizard.addEventListener('click', () => {
        playerChoice.textContent = "Player Chooses Lizard";
        playRound('Lizard');
    });

const spock = document.querySelector('#spock');
    spock.addEventListener('click', () => {
        playerChoice.textContent = "Player Chooses Spock";
        playRound('Spock');
    });



    /*---------Computer Selection Code---------*/
function computerPlay(){
    let choice = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    const cpu = choice[Math.floor(Math.random()* 5)]; //random computer choice. used .length so I can add additional options in the future without changing this line.
    computerChoice.textContent = 'Computer Chooses ' + cpu;
        return cpu;
        //console.log("Computer Choice " + cpu); 
}
    

    /*------Game Logic-------*/
    function playRound (user, cpu){

    cpu = computerPlay();

    if (user === cpu){
        roundWinner.textContent = "Tie? This isn't soccer...";
        //console.log("Tie");
    }

    else if ((user === "Rock" && cpu === "Scissors") ||
             (user === "Rock" && cpu === "Lizard") ||
             (user === "Paper" && cpu === "Rock") ||
             (user === "Paper" && cpu === "Spock") ||
             (user === "Scissors" && cpu == "Lizard") ||
             (user === "Scissors" && cpu === "Paper") ||
             (user === "Lizard" && cpu === "Spock") ||
             (user === "Lizard" && cpu == "Paper") ||
             (user === "Spock" && cpu === "Scissors") ||
             (user === "Spock" && cpu == "Rock"))
             {
                roundWinner.textContent = 'Player Wins the Round';
                //console.log("Player Wins")
                userScore++;
                playerScore.textContent = userScore;
            }

    else if ((cpu === "Rock" && user === "Scissors") ||
             (cpu === "Rock" && user === "Lizard") ||
             (cpu === "Paper" && user === "Rock") ||
             (cpu === "Paper" && user === "Spock") ||
             (cpu === "Scissors" && user == "Lizard") ||
             (cpu === "Scissors" && user === "Paper") ||
             (cpu === "Lizard" && user === "Spock") ||
             (cpu === "Lizard" && user == "Paper") ||
             (cpu === "Spock" && user === "Scissors") ||
             (cpu === "Spock" && user == "Rock"))
            {
       roundWinner.textContent = 'Computer Wins the Round';
       //console.log("Computer Wins")
       cpuScore++;
       computerScore.textContent = cpuScore;
   }     

          

    game()
}

/*--------------Game Scoring------------*/
function game(){

function removeBtns() {
    rock.remove();
        paper.remove();
        scissors.remove();
        lizard.remove();
        spock.remove();
}

/*-------End Game Message--------*/
    if(userScore == 5 && cpuScore > 0) {
        //console.log("Player Wins Game");
        pWinner.textContent = 'You won this time! Care to challenge me again?';

       
        removeBtns();
        playAgain.classList.add('newGame');
        playAgain.textContent = 'Play Again?';

        newGame.appendChild(playAgain);
        newGame.addEventListener('click', restart);
    }

    else if (userScore == 5 && cpuScore == 0) {
        pWinner.textContent = 'YOU ARE A GOD!!';

        removeBtns();
        
        playAgain.classList.add('newGame');
        playAgain.textContent = "Prove It?";

        newGame.appendChild(playAgain);
        newGame.addEventListener('click', restart);
    }

    else if (cpuScore == 5 && userScore > 0) {
        //console.log("Computer Wins Game");
        cWinner.textContent =   'You bring shame to your family';

        removeBtns();

        playAgain.classList.add('newGame');
        playAgain.textContent = 'Revenge?';

        newGame.appendChild(playAgain);
        newGame.addEventListener('click', restart);
    }

    else if (cpuScore == 5 && userScore == 0) {
        //console.log("Computer Wins Game");
        cWinner.textContent = 'Computer Wins: Flawless Victory!';
        removeBtns();

        playAgain.classList.add('newGame');
        playAgain.textContent = 'Care to Lose Again?';

        newGame.appendChild(playAgain);
        newGame.addEventListener('click', restart);
    }

  
} 

game()