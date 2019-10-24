//const rockbtn = document.querySelector('#rock');
//const paperbtn = document.querySelector('#paper');
//const scissorsbtn = document.querySelector('#scissors');

let playerScore = 0;
let computerScore = 0;
 
var buttons = document.querySelectorAll('button');
buttons.forEach(buttons => buttons.addEventListener('click', game));

const score = document.querySelector('#scores');
const playerWins = document.querySelector('#playerWins');
const compWins = document.querySelector('#compWins');

function computerPlay()
{
    let choice = Math.floor(Math.random() * Math.floor(3));
    if(choice == 0){
        return 'rock';
    }
    else if(choice == 1){
        return 'paper';
    }
    else if(choice == 2){
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    //console.log("player: "  + playerSelection);
    //console.log("computer : " + computerSelection);

    score.textContent = "Player : " + playerSelection +" Computer : " + computerSelection;

    if(playerSelection == computerSelection)
    {
        return 0;
    }
    else if(playerSelection == "rock" && computerSelection == "paper")
    {
        return 2;
    }
    else if(playerSelection == "rock" && computerSelection == "scissors")
    {
        return 1;
    }
    else if(playerSelection == "paper" && computerSelection == "rock")
    {
        return 1;
    }
    else if(playerSelection == "paper" && computerSelection == "scissors")
    {
        return 2;
    }
    else if(playerSelection == "scissors" && computerSelection == "rock")
    {
        return 2;
    }
    else if(playerSelection == "scissors" && computerSelection == "paper")
    {
        return 1;
    }
}

function check()
{
    if(playerScore >= 5)
    {
        alert("YOU WON!!!");
    }
    else if(computerScore >= 5)
    {
        alert("YOU LOST!!!");
    }
}

function game(e)
{   
    const playerSelection = e.target.value;
    const computerSelection = computerPlay();

    let point = playRound(playerSelection, computerSelection);
    
    if(point == 1)
    {
        playerScore++;
    }
    else if(point == 2)
    {
        computerScore++;
    }
    else
    {
        //nothing happens. Its a draw!!!
    } 

    //console.log("player wins : "+playerScore);
    //console.log("computer wins : "+computerScore);

    playerWins.textContent = "Player Wins : " + playerScore;
    compWins.textContent = "Computer Wins : " + computerScore;

    check();
}

