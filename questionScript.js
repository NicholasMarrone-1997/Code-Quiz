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
var secondsLeft = 30;
var counter = 0;

// Start working code 
//Start Timer Function
timeStart.addEventListener("click", setTime);

function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeDisplay.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    //Calling Functions
    displayQuestions();
}


function buildButton(i) {
    const button = document.createElement("button")
    button.innerText = i;
    //add logical statement for button comparison to answer?
    //console.log(i); //returns the choices as buttons 
    let res;
    if (questions[0].answer === i) {
        res = true
    } else {
        res = false
    }
    button.setAttribute("res", res)
    button.addEventListener("click", function () {
        // console.log(res) returns true or false
        if (res === true) {
            questions[0] = questions[0] + [1];
            displayQuestions();
        } else {
            secondsLeft = secondsLeft - 10;
            displayQuestions();
        }
    })
    return button;
}

function displayQuestions() {
    //Counter
    if (counter < questions.length) {
        answers.innerHTML = questions[counter].title;
        counter++;
    }

    questions[0].choices.map((i) => (
        questionsEl.append(buildButton(i))
    ))
}