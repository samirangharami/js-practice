function getGuess() {
  const responseAsString = prompt('Enter your guess:');
  const response = parseInt(responseAsString);

  return response;
}

function wrongGuessmessage(guessesRemaining){
  return `
  Try again
  Guesses remaining: ${guessesRemaining}\n`
}

function play(guessesRemaining, secretNumber) {
  const response = getGuess();

  if (response === secretNumber) {
    console.log('you won!');
    return;
  }

  const hint = response > secretNumber ? 'Guess lower' : 'Guess higher';

  console.log(hint);
  console.log(wrongGuessmessage(guessesRemaining));

  if(guessesRemaining === 0){
    console.log('you lose!');
    console.log('The secret number was:', secretNumber);
    return;
  }

  return play(guessesRemaining - 1);
}

function getSecretNumber() {
  return Math.floor((Math.random() * 100));
}

function playGuessNumber(){
  const secretNumber = getSecretNumber();
  const totalGuesses = 4;
  play(totalGuesses, secretNumber);
  console.log(secretNumber);
  
}

playGuessNumber();