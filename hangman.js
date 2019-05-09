var words = [
    "pancake",
    "donut",
    "icecream",
    "spaghetti",
    "chapati",
    "pizza",
];

var words = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < words.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = words.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Guess a letter, or click Cancel to stop playing");
    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert("please enter a single letter");
    }
    // else if (guess !== j) {
    //     alert("5 tries exceeded, sorry you lost"); break;
    // }
    else {
        for (var j = 0; j < words.length; j++){
            if (words[j] === guess){
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("Good Job! The answer was " + words);
