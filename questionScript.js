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
var timeDisplay = document.querySelector("#timeDisplay");
var timer = document.querySelector("#timeStart");
var questions = document.querySelector("#questions");
var container = document.querySelector("#container");
var choices = document.querySelector("#choices");

// Start working code 
//Start Timer Function
timeStart.addEventListener("click", setTime);

function setTime() {
    var secondsLeft = 30;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeDisplay.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    //on button click, clear the html 
    document.getElementById("questions").innerHTML = "";
    displayQuestions();
}

//Display Question Function
function displayQuestions() {
    document.getElementById("questions").innerHTML = questions[0].title + "," + questions[0].choices + "," + questions[0].answer;
}

