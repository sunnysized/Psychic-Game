//JAVASCRIPT CODE

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var winner = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = 9;
var guessedLetters = [];
var yetToGuess = null;
var compGuess = letters[Math.floor(Math.random() * letters.length)];
var updatingGuesses = function() {

//the "guesses left" to appear on my page
document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

//letters that the player hasn't chosen yet (not to be seen on page)
var updatingNotGuessedYet = function() {
    this.yetToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

//list out the letters the player has already guessed (repeats allowed)
var soFar = function() {
    document.querySelector('#lettersGuessed').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//after total guesses reaches 9, the game will tell the player whether they won or not and set all values back to 0
//apart from the "guesses left" feature which will reset to 9
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    updatingNotGuessedYet();
    updatingGuesses();
    soFar();
}

//as player types, update letters guessed and not guessed
updatingNotGuessedYet();
updatingGuesses();
    document.onkeyup = function(event) {
    guessesLeft--;

//make all letters guessed lower case
var whatAreYouGuessing = String.fromCharCode(event.keyCode).toLowerCase();
    guessedLetters.push(whatAreYouGuessing);
    updatingGuesses();
    soFar();

//determine if the player wins or loses, respectively with alert messages
    if (guessesLeft > 0){

    if (whatAreYouGuessing == yetToGuess){
    winner++;

    document.querySelector('#winner').innerHTML = "Wins: " + winner;
    
    alert("Hey! You ARE psychic! Press OK to play again.");

    reset();
    }

    }else if(guessesLeft == 0){
    losses++;

    document.querySelector('#losses').innerHTML = "Losses: " + losses;

    alert("Looks like you're not psychic... Press OK to try again though!");

    reset();
}
};