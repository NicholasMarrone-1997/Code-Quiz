// Var with array and object for questions 
var questions = [{
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];
// Declared variables
var score = 0;
var questionIndex = 0;
var secondsLeft = 30;

// Start working code 
// Declared variables
var timeDisplay = document.querySelector("#timeDisplay");
var timer = document.querySelector("#timeStart");
var questions = document.querySelector("#questions");
var container = document.querySelector("#container");

//Start Timer Function
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeDisplay.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}
setTime();




//Loop that iterates through questions, displays question title and choices and checks to see if its correct and increments score
function questionDisplay() {
    for (var i = 0; i < questions.length; i++) {
        var response = window.prompt(questions[i].title);
        var userChoices = window.prompt(questions[i].choices);
        if (response == questions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert("Incorrect");
        }
    }
    alert("You got: " + score + " out of " + questions.length + " questions.");
}