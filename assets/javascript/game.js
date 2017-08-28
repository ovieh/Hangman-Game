var pies = ['rhubarb', 'pecan', 'apple', 'chocolate cream', 'banana cream', 'shoo fly'];
var randomPick = pies[Math.floor(Math.random() * pies.length)];
var wins = 0;
var lettersRemaining = 0;
var dashes = "";


console.log(randomPick);

//So i need to figure out the length of each string in the array, then

document.onkeyup = function (event) {
    var userGuess = event.key;
   // console.log(lettersRemaining);

    for (var i = 0; i < pies.length; i++) {
        lettersRemaining = pies[i].length;
        for(var j = 0; j < pies[i].length; j++) {
            if(userGuess===pies[i].charAt(j)) {
                console.log(pies[i].charAt(j));
            }            
            else{
            }
        }
    }

    var html =
        "<p>You chose: " + randomPick + "</p>" +
        "<p>You pressed: " + userGuess + "</p>" +
        "<p>" + dashes + "</p>";

    document.querySelector("#game").innerHTML = html;
}