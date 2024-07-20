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
    let humanChoice = prompt('Please enter “rock”, “paper” or “scissors”',"");
    return humanChoice;
}

getHumanChoice();
console.log(getHumanChoice());