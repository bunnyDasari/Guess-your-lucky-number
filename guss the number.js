let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randamNumber = Math.ceil(Math.random() * 100);
console.log(randamNumber)

function checkGuess() {
    let gussedNumber = parseInt(userInput.value);

    if (gussedNumber > randamNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "blue";
    } else if (gussedNumber < randamNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "blue";
    } else if (gussedNumber === randamNumber) {
        gameResult.textContent = "Congratulations! you got it right.";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "OOPS! Provide a vaild number"
        gameResult.style.backgroundColor = "red";
    }

}