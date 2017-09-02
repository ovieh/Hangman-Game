var pies = ['rhubarb', 'pecan', 'apple', 'chocolate', 'pumpkin', 'lemon', 'blackberry', 'boysenberry', 'cherry', 'chiffon', 'shepherds'];
var randomPick = "";
var wins = 0;
var guessesRemaining = 0;
var dashArray = [];
var guessArray = [];
var placeHolder = "";

setWord();
createDashes(randomPick);

function setWord() {
    randomPick = pies[Math.floor(Math.random() * pies.length)];
    guessesRemaining = randomPick.length;
}

function letterChecker(letter) {
    if (randomPick.indexOf(letter) === -1 && guessArray.indexOf(letter) === -1) {
        guessArray.push(letter);
        guessesRemaining--;
        showGuess();
    } else {
        for (var i = 0; i < randomPick.length; i++) {
            if (letter === randomPick.charAt(i)) {
                dashArray[i] = randomPick.charAt(i);
            }
        }
    }
    placeHolder = dashArray.join(" ");
}

function showGuess(){
    var wrongGuess = document.getElementById("letterGuessed");
    wrongGuess.innerHTML = guessArray.join(", ");
}

function createDashes(word) {
    for (var i = 0; i < randomPick.length; i++) {
        dashArray.push("_");
    }
}

function display() {
    var gameOutput = document.getElementById("game");
    gameOutput.innerHTML = placeHolder;
    var displayRemainingGuesses = document.getElementById("guesses");
    displayRemainingGuesses.innerHTML = guessesRemaining;
    console.log(guessesRemaining);//debugging code
}

function displayPie(thisImg) {
    switch (randomPick) {
        case "apple":
            document.getElementById('pieImage').src = "assets/images/apple.jpg";
            break;
        case "rhubarb":
            document.getElementById('pieImage').src = "assets/images/rhubarb.jpg";
            break;
        case "pecan":
            document.getElementById('pieImage').src = "assets/images/pecan.jpg";
            break;
        case "chocolate":
            document.getElementById('pieImage').src = "assets/images/chocolate.jpg";
            break;
        case "pumpkin":
            document.getElementById('pieImage').src = "assets/images/pumpkin.jpg";
            break;
        case "lemon":
            document.getElementById('pieImage').src = "assets/images/lemon.jpg";
            break;
        case "rhubarb":
            document.getElementById('pieImage').src = "assets/images/rhubarb.jpg";
            break;
        case "blackberry":
            document.getElementById('pieImage').src = "assets/images/blackberry.jpg";
            break;
        case "boysenberry":
            document.getElementById('pieImage').src = "assets/images/boysenberry.jpg";
            break;
        case "cherry":
            document.getElementById('pieImage').src = "assets/images/cherry.jpg";
            break;
        case "chiffon":
            document.getElementById('pieImage').src = "assets/images/chiffon.jpg";
            break;
        case "shepherds":
            document.getElementById('pieImage').src = "assets/images/shepherds.jpg";
            break;
    }
}

function winLoss() {
    if (dashArray.join("") === randomPick) {
        wins++;
        var displayWins = document.getElementById("wins");
        displayWins.innerHTML = wins;
        displayPie();
        reset();
        alert("You won!");
    } else if (guessesRemaining === 0) {
        reset();
        alert("Sorry, you lost");

    }
}

function reset() {
    guessArray = [];
    dashArray = [];
    setWord();
    createDashes(randomPick);
    showGuess();
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    letterChecker(userGuess);
    winLoss();
    display();
}