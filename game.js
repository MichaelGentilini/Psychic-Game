/* Declaring letters and other variables */

var computerLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0,
  losses = 0,
  guessesNotUsed = 10,
  guessThus = [],
  divYourSelection = document.getElementById("user-guess"),
  divComputerGuess = document.getElementById("computer-guess"),
  divWins = document.getElementById("col-win"),
  divLosses = document.getElementById("col-loss"),
  divGuessesLeft = document.getElementById("col-guessLeft"),
  divGuessesSoFar = document.getElementById("col-guessSoFar"),
  wrongKey = document.getElementById("wrong-key"),
  youWin = document.getElementById("you-win");

var computerGuess =
  computerLetter[Math.floor(Math.random() * computerLetter.length)];
console.log(computerGuess);

document.onkeyup = function (event) {

  // Determines which key was pressed by te user.
  var letterGuessed = event.key.toLowerCase();

  function userGuessFunction() {
    document.getElementById("col-guessSoFar").innerHTML = guessThus;
    guessThus.push(letterGuessed);
  }


  // Track Wins

  if (letterGuessed == computerGuess) {
    wins++
    guessesNotUsed = 10;
    guessThus = [];
    // youWin.style.display == "";
  }

  // Track losses

  if (letterGuessed !== computerGuess && guessesNotUsed >= 0) {
    guessesNotUsed--
  }

  // Deduct guessesNotUsed  with wrong answers
  if (guessesNotUsed == 0) {
    losses++
    guessThus = [];
    guessesNotUsed = 10;
  }

  // Only allow letters to be guessed

  if (computerLetter.indexOf(letterGuessed) == -1) {
    alert('Please select the letters a - z only!');
  }


  /* Write to HTML */
  divYourSelection.textContent = letterGuessed;
  // divComputerGuess.textContent = computerGuess;
  divWins.textContent = wins;
  divLosses.textContent = losses;
  divGuessesLeft.textContent = guessesNotUsed;
  userGuessFunction(divYourSelection.textContent = letterGuessed);
  // divGuessesSoFar.push = user-guessThus;
  //   divWins.textContent = col;
  // divComputerGuess.textContent= computer-guess;
}