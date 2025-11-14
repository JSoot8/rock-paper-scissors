

function getComputerChoice () {
    //get a random number between 1 and 3 and store it in a variable
    const choice = getRandomInt(1, 3);
    //if the number is 1 return rock
    switch(choice) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';    
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}