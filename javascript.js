
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

//starts a 5 round long game of rock paper scissors against the computer
function playGame () {
    let playerScore = 0;
    let computerScore = 0;

    console.log('The measly human has rebelled against Ineffa our almighty overlord and challenged him to a battle of wits! A match of rock, paper and scissors!');
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
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

}

let playerScore = 0;
let computerScore = 0;
let results = document.querySelector('#results');

//plays a single round of rock paper scissors against the computer
function playRound (humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        let result = document.createElement('p');
        result.textContent = `Tie! Score stays the same.\nIneffa: ${computerScore}\nHuman: ${playerScore}`
        results.appendChild(result);
    }
        
    else if(computerChoice === 'rock' && humanChoice === 'scissors' || 
        computerChoice === 'scissors' && humanChoice === 'paper' || 
        computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore++;
        let result = document.createElement('p');
        result.textContent = `The almighty Ineffa has thwarted the mere mortal's puny attacks!\nIneffa: ${computerScore}\nHuman: ${playerScore}`
        results.appendChild(result);
    }

    else {
        playerScore++;
        let result = document.createElement('p');
        result.textContent = `The rebelious human has outmanuvered the cunning Ineffa's schemes!\nIneffa: ${computerScore}\nHuman: ${playerScore}`
        results.appendChild(result);
    }

    if(computerScore === 5) {
        let winnerMessage = document.createElement('h3');
        winnerMessage.textContent = `The immortal Ineffa has outsmarted yet another of its challengers, an expected outcome.\nFinal Score:\nIneffa - ${computerScore}\nHuman - ${playerScore}`
        results.appendChild(winnerMessage);
        playerScore = 0;
        computerScore = 0;
    }
    else if(playerScore === 5) {
        let winnerMessage = document.createElement('h3');
        winnerMessage.textContent = `The human has defeated the seemingly unbeatable Ineffa, what might the future hold after this outcome?\nFinal Score:\nHuman - ${playerScore}\nIneffa - ${computerScore}`
        results.appendChild(winnerMessage);
        playerScore = 0;
        computerScore = 0;
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let choices = document.querySelector('div');

choices.addEventListener('click', (event) => {
    //delete score from the display after playing another round
    while(results.children.length != 0) {
        results.removeChild(results.lastChild);
    }
    playRound(event.target.textContent.toLowerCase(), getComputerChoice())
});