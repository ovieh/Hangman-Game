var pies = ['rhubarb', 'pecan', 'apple', 'chocolate', 'pumpkin', 'shoo fly', 'lemon', 'blackberry', 'boysenberry', 'cherry', 'chiffon', 'shepherds'];
var randomPick = pies[Math.floor(Math.random() * pies.length)];
var wins = 0;
var lettersRemaining = randomPick.length;
var dashArray = [];
var guessArray = [];
var guessCount = 0;
var placeHolder = "";

console.log(randomPick);

//So i need to figure out the length of each string in the array, then

// console.log(lettersRemaining);

function letterChecker(letter) {
    if (randomPick.indexOf(letter) === -1 && guessArray.indexOf(letter) === -1) {
        guessArray.push(letter);
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
}

// function winLoss(){
//     if()
// }

createDashes(randomPick);
//console.log(dashArray);
document.onkeyup = function (event) {
    var userGuess = event.key;
    letterChecker(userGuess);
    display();

    console.log(placeHolder);




    // var html =
    //     "<p>You chose: " + randomPick + "</p>" +
    //     "<p>You pressed: " + userGuess + "</p>"; // +
    // // "<p>" + dashArray + "</p>";

    // document.querySelector("#game").innerHTML = html;
}