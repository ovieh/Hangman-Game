var pies = ['rhubarb', 'pecan', 'apple', 'chocolate cream', 'banana cream', 'shoo fly'];
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

// while (guessCount >= l)
function letterChecker(letter) {
    if (randomPick.indexOf(letter) === -1) {
        guessArray.push(letter);
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

// function letterGuessed(word){
//     for(var i=0; i<letter.length;i++){
//         if()
//     }
// }

createDashes(randomPick);
//console.log(dashArray);
console.log(placeHolder);

document.onkeyup = function (event) {
    var userGuess = event.key;

    letterChecker(userGuess);
    // console.log(dashArray);
    console.log(placeHolder);
    //     guessCount++;
    // console.log(lettersGuessed);




    var html =
        "<p>You chose: " + randomPick + "</p>" +
        "<p>You pressed: " + userGuess + "</p>"; // +
    // "<p>" + dashArray + "</p>";

    document.querySelector("#game").innerHTML = html;
}