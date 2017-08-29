var pies = ['rhubarb', 'pecan', 'apple', 'chocolate cream', 'banana cream', 'shoo fly'];
var randomPick = pies[Math.floor(Math.random() * pies.length)];
var wins = 0;
var lettersRemaining = randomPick.length;
var dashArray = [];


console.log(randomPick);

//So i need to figure out the length of each string in the array, then

// console.log(lettersRemaining);

function letterChecker(word) {
    for (var i = 0; i < randomPick.length; i++) {
        if (word === randomPick.charAt(i)) {
            // console.log(randomPick.charAt(i));
            dashArray[i] = randomPick.charAt(i);
        } else {

        }
    }
}

function createDashes(word) {
    for (var i = 0; i < randomPick.length; i++) {
        dashArray.push("_");
    }
}

createDashes(randomPick);
console.log(dashArray);

document.onkeyup = function (event) {
    var userGuess = event.key;

    letterChecker(userGuess);
    console.log(dashArray);
    



    var html =
        "<p>You chose: " + randomPick + "</p>" +
        "<p>You pressed: " + userGuess + "</p>"; // +
        // "<p>" + dashArray + "</p>";

    document.querySelector("#game").innerHTML = html;
}