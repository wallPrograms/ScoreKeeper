// VARIABLES

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var numInput = document.querySelector("input[type='number']");

var winningScoreDisplay = document.querySelector("p span"); //span inside a paragraph

var p1Score = 0;
var p2Score = 0;

var isGameOver = false;
var winningScore = 5;



// EVENT LISTENERS

// Both would stop if isGameOver since both need isGameOver to keep running

p1Button.addEventListener("click", function() {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            isGameOver = true;
        }
        
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            isGameOver = true;
        }
        
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", reset);

// a change vent will run every time the value changes
numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value); // Using the console, we can see that once the numInput value is changed, it is a string, we need a number
    reset();
});




// FUNCTIONS

function reset() {
    p1Score = 0;
    p2Score = 0;
    
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    
    isGameOver = false;
};

