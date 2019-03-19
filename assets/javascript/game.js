/* Declaring letters and other variables */

var computerLetter = [
  "a",
  "b",
  "c"
  // "d",
  // "e",
  // "f",
  // "g",
  // "h",
  // "i",
  // "j",
  // "k",
  // "l",
  // "m",
  // "n",
  // "o",
  // "p",
  // "q",
  // "r",
  // "s",
  // "t",
  // "u",
  // "v",
  // "w",
  // "x",
  // "y",
  // "z"
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
  divHeader = document.getElementById("header");

var computerGuess =
  computerLetter[Math.floor(Math.random() * computerLetter.length)];
console.log(computerGuess);

document.onkeyup = function(event) {
  // Determines which key was pressed by te user.
  var letterGuessed = event.key.toLowerCase();

  function userGuessFunction() {
    document.getElementById("col-guessSoFar").innerHTML = guessThus;
    // console.log(guessThus + "   " + letterGuessed);
  }
  guessThus.push(letterGuessed);
  userGuessFunction((divYourSelection.textContent = letterGuessed));
  // if (userGuessFunction)

  // if (computerGuess = letterGuessed) {
  //   wins++
  // } else {
  //   losses++
  // }

  /* Write to HTML */
  divYourSelection.textContent = letterGuessed;
  divWins.textContent = wins;
  divComputerGuess.textContent = computerGuess;

  // divLosses.textContent = losses;
  // divHeader.addEventListener("click", function () {
  //   console.log("I changed the Header");

  // divGuessesSoFar.push = user-guessThus;
  // divGuessesLeft.textContent = guessesNotUsed;        //   divWins.textContent = col;
};
