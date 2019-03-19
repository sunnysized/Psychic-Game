//JAVASCRIPT CODE

var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var winnings = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var yetToGuess = null;
var pcGuess = choices[Math.floor(Math.random() * choices.length)];
var updatingGuesses = function() {

document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updatingToGuess = function() {
    this.yetToGuess = this.choices[Math.floor(Math.random() * this.choices.length)];
};

var soFar = function() {
    document.querySelector('#lettersGuessed').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    updatingToGuess();
    updatingGuesses();
    soFar();
}

updatingToGuess();
updatingGuesses();
    document.onkeyup = function(event) {
    guessesLeft--;

var whatAreYouGuessing = String.fromCharCode(event.keyCode).toLowerCase();
    guessedLetters.push(whatAreYouGuessing);
    updatingGuesses();
    soFar();

    if (guessesLeft > 0){

    if (whatAreYouGuessing == yetToGuess){
    winnings++;

    document.querySelector('#winnings').innerHTML = "Wins: " + winnings;
    
    alert("Yes, you are psychic!");

    reset();
    }

    }else if(guessesLeft == 0){
    losses++;

    document.querySelector('#losses').innerHTML = "Losses: " + losses;

    alert("Sorry, you're not psychic, maybe try again?");

    reset();
}
};