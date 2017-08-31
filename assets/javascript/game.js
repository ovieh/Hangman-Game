var pies = ['rhubarb', 'pecan', 'apple', 'chocolate', 'pumpkin', 'shoo fly', 'lemon', 'blackberry', 'boysenberry', 'cherry', 'chiffon', 'shepherds'];
var randomPick = "";
var wins = 0;
var guessesRemaining = 0;
var dashArray = [];
var guessArray = [];
var placeHolder = "";

setWord();
createDashes(randomPick);
//So i need to figure out the length of each string in the array, then


function setWord() {
    randomPick = pies[Math.floor(Math.random() * pies.length)];
    guessesRemaining = randomPick.length;
}

function letterChecker(letter) {
    if (randomPick.indexOf(letter) === -1 && guessArray.indexOf(letter) === -1) {
        guessArray.push(letter);
        guessesRemaining--;
        var displayWrongGuess = document.getElementById("letterGuessed");
        displayWrongGuess.innerHTML = guessArray.join(", ");
    } else {
        for (var i = 0; i < randomPick.length; i++) {
            if (letter === randomPick.charAt(i)) {
                // console.log(randomPick.charAt(i));
                dashArray[i] = randomPick.charAt(i);
            }
        }
    }
    placeHolder = dashArray.join(" ");
}

function createDashes(word) {
    for (var i = 0; i < randomPick.length; i++) {
        dashArray.push("_");
    }
}

function display() {
    var gameOutput = document.getElementById("game");
    gameOutput.innerHTML = placeHolder;
    // guessesRemaining = randomPick.length;
    var displayRemainingGuesses = document.getElementById("guesses");
    displayRemainingGuesses.innerHTML = guessesRemaining;
    console.log(guessesRemaining);
}

function winLoss() {
    if (dashArray.join("") >= randomPick) {
        wins++;
        var displayWins = document.getElementById("wins");
        displayWins.innerHTML = wins;
        reset();     
        alert("You won!");
    } else if (guessArray.length === dashArray.length) {
        reset();
        alert("Sorry, you lost");
        
    }
}

function reset() {
    guessArray = [];
    dashArray = [];
    setWord();
    createDashes(randomPick);
}


document.onkeyup = function (event) {
    var userGuess = event.key;
    letterChecker(userGuess);
    console.log(placeHolder);
    winLoss();
    display();

}