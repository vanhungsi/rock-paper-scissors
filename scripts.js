function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors']
    if (Math.random() < 0.33) {
        return computerChoice[0];
    } else if (Math.random() < 0.66) {
        return computerChoice[1];
    } else {
        return computerChoice[2];
    }
}



function getHumanChoice(){
    let humanChoice = prompt('Please enter “rock”, “paper” or “scissors”',"").toLowerCase();
    return humanChoice;
}

// getHumanChoice();
// console.log(getHumanChoice());

let humanScore = (Number(""), 0);
let computerScore = (Number(""), 0);

function playRound(humanChoice, computerChoice) {
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("Please enter the right word - 'rock', 'paper' or 'scissors'");

    } else if (humanChoice === computerChoice) {
        alert("Oh! It's a tie.");

    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("You lose this round, paper beats rock!");

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win this round, rock beats scissors!");

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win this round, paper beats rock!");

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("You lose this round, scissors beats paper!");

    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("You lose this round, rock beats scissors!");

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win this round, scissors beats paper!");
    }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);