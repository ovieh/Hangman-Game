var pies = ['rhubarb', 'pecan', 'apple', 'chocolate', 'pumpkin', 'lemon', 'blackberry', 'boysenberry', 'cherry', 'chiffon', 'shepherds'];
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
            document.getElementById('pieImage').src = "assets/images/boysonberry.jpg";
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

console.log(randomPick);

function winLoss() {
    if (dashArray.join("") >= randomPick) {
        wins++;
        var displayWins = document.getElementById("wins");
        displayWins.innerHTML = wins;
        displayPie();
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