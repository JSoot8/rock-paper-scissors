

function getComputerChoice () {
    //get a random number between 1 and 3 and store it in a variable
    const choice = getRandomInt(1, 3);
    switch (choice) {
        //if the number is 1 return rock
        case 1:
            return 'Rock';
        //if the number is 2 return paper
        case 2:
            return 'Paper';
        //if the number is 3 return scissors
        case 3:
            return 'Scissors';    
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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}