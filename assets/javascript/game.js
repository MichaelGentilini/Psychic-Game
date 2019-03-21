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
      // console.log(letterinPlay);
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
  console.log(removeDuplicates(guessThus))

  // Track Wins

  if (letterGuessed == computerGuess) {
    wins++;
    youWinAlert.style.visibility = "visible";
    guessThus = [];
    guessesNotUsed = 10;
  } else {
    youWinAlert.style.visibility = "hidden";
  }

  // Track available guesses

  if (letterGuessed !== computerGuess && (removeDuplicates(guessThus).length) >= 0) {
    guessesNotUsed--;
  }

  // if (letterGuessed == computerGuess && (removeDuplicates(guessThus).length) !== guessThus.length) {
  //   guessesNotUsed++;
  // }

  console.log(computerGuess);
  console.log(letterGuessed);
  console.log("*********")
  console.log((removeDuplicates(guessThus).length));
  console.log(guessThus.length);
  console.log("-- -- -- -- -- -- -- -- -- -- -- - =")

  // Track losses

  console.log(guessesNotUsed);
  // Deduct guessesNotUsed  with wrong answers
  if (guessesNotUsed == 0) {
    losses++;
    guessThus = [];
    guessesNotUsed = 10;
    youWinAlert.style.visibility = "visible";
  } else {
    youWinAlert.style.visibility = "hidden";
  }


  // console.log("guessThus: " + guessThus.length);
  // console.log("(removeDuplicates: " + (removeDuplicates(guessThus).length));

  // if ((removeDuplicates(guessThus).length) == guessThus.length) {
  //   guessesNotUsed++
  // }


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
  divGuessesSoFar.textContent = (removeDuplicates(guessThus));
  userGuessFunction((divYourSelection.textContent = letterGuessed));
};