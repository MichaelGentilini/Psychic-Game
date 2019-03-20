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
  noDuplicates = [],
  divYourSelection = document.getElementById("user-guess"),
  divComputerGuess = document.getElementById("computer-guess"),
  divWins = document.getElementById("col-win"),
  divLosses = document.getElementById("col-loss"),
  divGuessesLeft = document.getElementById("col-guessLeft"),
  divGuessesSoFar = document.getElementById("col-guessSoFar"),
  wrongKey = document.getElementById("wrong-key"),
  youWinAlert = document.getElementById("you-win"),
  newLetter = document.getElementById("new-letter");

var computerGuess =
  computerLetter[Math.floor(Math.random() * computerLetter.length)];
console.log(computerGuess);

document.onkeyup = function(event) {
  // Determines which key was pressed by te user.
  var letterGuessed = event.key.toLowerCase();

  // user Guess Function
  function userGuessFunction() {
    guessThus.push(letterGuessed);
  }

  // Remove duplicates from guesses
  var noDuplicates = [];
  dojo.forEach(guessThus, function(item, i) {
    if (dojo.indexOf(noDuplicates, item) == -1) {
      noDuplicates.push(item);
    }
  });
  document.getElementById("col-guessSoFar").textContent = noDuplicates;
  console.log(console.log(noDuplicates));

  // Track Wins

  if (letterGuessed == computerGuess) {
    wins++;
    youWinAlert.style.visibility = "visible";
    guessThus = [];
    guessesNotUsed = 10;
  } else {
    youWinAlert.style.visibility = "hidden";
  }

  // Track losses

  if (letterGuessed !== computerGuess && guessesNotUsed >= 0) {
    guessesNotUsed--;
  }

  // Deduct guessesNotUsed  with wrong answers
  if (guessesNotUsed == 0) {
    losses++;
    guessThus = [];
    guessesNotUsed = 10;
  }

  // Only allow letters to be guessed

  if (computerLetter.indexOf(letterGuessed) == -1) {
    // alert("Please select the letters a - z only!");
    // wrongKey.style.display = "normal";
    wrongKey.style.visibility = "visible";
  } else {
    wrongKey.style.visibility = "hidden";
  }

  // do not allow for repetitive keystrokes

  // if (guessThus.indexOf(letterGuessed) >= -1) {
  //   newLetter.style.visibility = "visible";
  // } else {
  //   newLetter.style.visibility = "hidden";
  // }

  // function lettersOnly(letterGuessed) {
  //   var lettersOnly = /[^a-z^]/gi;
  // }

  /* Write to HTML */
  divYourSelection.textContent = letterGuessed;
  divComputerGuess.textContent = computerGuess;
  divWins.textContent = wins;
  divLosses.textContent = losses;
  divGuessesLeft.textContent = guessesNotUsed;
  userGuessFunction((divYourSelection.textContent = letterGuessed));
  // divGuessesSoFar.push = user-guessThus;
  //   divWins.textContent = col;
  // divComputerGuess.textContent= computer-guess;
};
