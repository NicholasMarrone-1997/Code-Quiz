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
var questionsEl = document.querySelector("#questions");
var container = document.querySelector("#container");
var choicesEl = document.querySelector("#choices");
var quiz = document.querySelector('#quiz');
var answers = document.querySelector('#answers');

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
    //document.getElementById("questions").innerHTML = "";
    displayQuestions();
}

function buildButton(i) {
    const button = document.createElement("button")
    button.innerText = i;
    //add logical statement for button comparison to answer?
    //console.log(i); //returns the choices as buttons 
    return button;
}

function displayQuestions() {
    var counter = 0;
    if (counter < questions.length) {
        answers.innerHTML = questions[counter].title;
        counter++;
    }

    questions[0].choices.map((i) => (
        questionsEl.append(buildButton(i))
    ))
}

//Function that compares the users choice of 4 buttons vs the answer



