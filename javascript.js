playGame();
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

function playGame () {
    let playerScore = 0;
    let computerScore = 0;

    //declare the game has started with a flavorful message
    console.log('The measly human has rebelled against Ineffa our almighty overlord and challenged him to a battle of wits! A match of rock, paper and scissors!');
    //play 5 rounds
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    //declare the winner by evaluating the scores
    if(playerScore === computerScore) {
        console.log(`Both combatants have showed a magnificent display of wit, but neither has the upper hand. The battle will be decided another time!\nFinal Score:\nIneffa - ${computerScore}\nHuman - ${playerScore}`);
    }
    else if(playerScore > computerScore) {
        console.log(`The human has defeated the seemingly unbeatable Ineffa, what might the future hold after this outcome?\nFinal Score:\nHuman - ${playerScore}\nIneffa - ${computerScore}`)
    }
    else {
        console.log(`The immortal Ineffa has outsmarted yet another of its challengers, an expected outcome.\nFinal Score:\nIneffa - ${computerScore}\nHuman - ${playerScore}`)
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
            console.log(`The almighty Ineffa has thwarted the mere mortal's puny attacks!\nIneffa: ${computerScore}\nHuman: ${playerScore}`);
        }
        //if human beat the computer, result in human win and log a message saying so
        else {
            playerScore++;
            console.log(`The rebelious human has outmanuvered the cunning Ineffa's schemes!\nIneffa: ${computerScore}\nHuman: ${playerScore}`);
        }
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}