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
  guessThus = [],
  guessesNotUsed = 10,
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

document.onkeyup = function (event) {
  // Determines which key was pressed by te user.
  var letterGuessed = event.key.toLowerCase();

  // user Guess Function
  function userGuessFunction() {

    if (computerLetter.indexOf(letterGuessed) != -1) {

      guessThus.push(letterGuessed);
    }
  }
  // Use this Function to Remove Duplicates
  function removeDuplicates(arr) {
    var uniqueArray = []
    for (var i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) == -1) {
        uniqueArray.push(arr[i])
      }
    }
    return uniqueArray
  }
  // Track Wins

  if (letterGuessed == computerGuess) {
    wins++;
    youWinAlert.style.visibility = "visible";
    guessThus = [];
    guessesNotUsed = 10;
    newLetter.style.visibility = "hidden";

  } else {
    youWinAlert.style.visibility = "hidden";
  }

  // Track available guesses

  if (letterGuessed !== computerGuess && (removeDuplicates(guessThus).length) >= 0 && guessThus.indexOf(letterGuessed) == -1) {
    guessesNotUsed--;
    newLetter.style.visibility = "hidden";

  } else if (letterGuessed !== computerGuess && (removeDuplicates(guessThus).length) >= 0 && guessThus.indexOf(letterGuessed) != -1) {
    newLetter.style.visibility = "visible";
  }
  // Track lossesas

  if (guessesNotUsed == 0) {
    losses++;
    guessThus = [];
    guessesNotUsed = 10;
  }

  // console.log("guessThus: " + guessThus.length);
  // console.log("(removeDuplicates: " + (removeDuplicates(guessThus).length));

  // if ((removeDuplicates(guessThus).length) == guessThus.length) {
  //   guessesNotUsed++FGF
  // }


  // Only allow letters to be guessed

  if (computerLetter.indexOf(letterGuessed) == -1) {
    wrongKey.style.visibility = "visible";
    // #col-guess.style.backgroundcolo
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
  divGuessesSoFar.textContent = (removeDuplicates(guessThus));
  userGuessFunction((divYourSelection.textContent = letterGuessed));
};