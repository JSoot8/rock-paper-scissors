let playerScore = 0;
let computerScore = 0;
playRound(getHumanChoice(), getComputerChoice());

function getComputerChoice () {
    //get a random number between 1 and 3 and store it in a variable
    const choice = getRandomInt(1, 3);
    switch (choice) {
        //if the number is 1 return rock
        case 1:
            return 'rock';
        //if the number is 2 return paper
        case 2:
            return 'paper';
        //if the number is 3 return scissors
        case 3:
            return 'scissors';
    }
}

function getHumanChoice () {
    //ask the user to input its choice and save it in a variable
    const choice = prompt('What is your choice mere mortal?').toLowerCase();
    //if the input is a valid answer then return it
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    }
    //if it is not a valid answer then ask the user again for a valid one again
    else {
        console.log('That is not a valid answer. Let me ask you again...');
        return getHumanChoice();
    }
}

function playRound (humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    //if both choices are equal then result in a tie
    if(humanChoice === computerChoice) {
        console.log(`Tie! Score stays the same.\nComputer: ${computerScore}\nHuman: ${playerScore}`);
    }
    //if computer beat the human, result in computer win and log a message saying so
    else if(computerChoice === 'rock' && humanChoice === 'scissors' || computerChoice === 'scissors' && humanChoice === 'paper' || computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore++;
        console.log(`The mighty computer has thwarted the mere mortal's puny attacks!\nComputer: ${computerScore}\nHuman: ${playerScore}`);
    }
    //if human beat the computer, result in human win and log a message saying so
    else {
        playerScore++;
        console.log(`The rebelious human has outmanuvered the cunning computer's schemes!\nComputer: ${computerScore}\nHuman: ${playerScore}`);
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}