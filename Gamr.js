let targetNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("submitButton").addEventListener("click", function () {
    let guess = document.getElementById("guessInput").value;
    if (guess == targetNumber) {
        document.getElementById("result").innerHTML = "You got it right! The number was " + targetNumber;
    } else if (guess < targetNumber) {
        document.getElementById("result").innerHTML = "The number is higher.";
    } else {
        document.getElementById("result").innerHTML = "The number is lower.";
    }
});
