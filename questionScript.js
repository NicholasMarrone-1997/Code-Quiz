// Array that holds object for questions
var questions = [{
        title: "What is the bird with the largest wingspan:",
        choices: ["Eagle", "Turkey Vulture", "Wandering Albatross", "Waterfowl"],
        answer: "Wandering Albatross"
    },
    {
        title: "Which of the following is not an endangered species:",
        choices: ["Black Rhino", "Bluefin Tuna", "Indian Elephant", "Cows"],
        answer: "Cows"
    },
    {
        title: "What is the average lifespan of a Gorilla:",
        choices: ["10 years", "20 years", "35 years", "50 years"],
        answer: "35 years"
    },
    {
        title: "What is the fastest water animal:",
        choices: ["Sailfish", "Squid", "Dolphin", "Marlin"],
        answer: "Sailfish"
    },
    {
        title: "What is the fastest land animal:",
        choices: ["Springbok", "Cheetah", "Greyhound", "Wildebeest"],
        answer: "Cheetah"
    },

];

// Global Variables
var timeDisplay = document.querySelector("#timeDisplay");
var timer = document.querySelector("#timeStart");
var questionsEl = document.querySelector("#questions");
var container = document.querySelector("#container");
var choicesEl = document.querySelector("#choices");
var quiz = document.querySelector('#quiz');
var answers = document.querySelector('#answers');
var secondsLeft = 30;
var counter = 0;

//Start Timer Function that adds a countdown clock 
timeStart.addEventListener("click", setTime);
function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeDisplay.textContent = secondsLeft + " seconds left";

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
    //Calling Functions
    displayQuestions();
}


function buildButton(i) {
    //creating buttons for the user choices and determining if their press is true or false
    const button = document.createElement("button")
    button.innerText = i;
    let res;
    var index = 0;
    if (questions[index].answer === i) {
        res = true
    } else {
        res = false
    }
    button.setAttribute("res", res)
    button.addEventListener("click", function () {
        console.log(res) //returns true or false
        if (res === true) { //if true then increment questions, title, and build button for next set of choices
            questions[index] += 1;
            displayQuestions();
        } else {//if false then decrement score by 10 and build button for next choices
            secondsLeft = secondsLeft - 10;
            questions[index] += 1;
            displayQuestions();
        }
    })
    return button;
}

function displayQuestions() {
    //Makes sure that questions are cleared before new ones are shown
    choicesEl.innerHTML = "";
    //Map function that iterates through questions and builds buttons for the choices
    if (counter < questions.length) {
        questions[counter].choices.map((i) => (
            choicesEl.append(buildButton(i))
        ))

        answers.innerHTML = questions[counter].title;
        counter++;
    } else {
        gameOver();
    }
}

function gameOver(){
    //clearing choices when game over called
    choicesEl.innerHTML = "";
    clearInterval(timeDisplay);
    // If statement doesn't let the time(score) go past zero
    if(secondsLeft < 0){
        secondsLeft = 0;
    }
    //Writing score to page
    choicesEl.innerHTML = "score: " + secondsLeft;

    //Creating a play again button that resets page on click
    var playReset = document.createElement("button");
    playReset.innerHTML = "Play Again?";
    playReset.setAttribute("id", "playreset");
    choicesEl.appendChild(playReset);
}
//Click event listener for pressing the play again button
choicesEl.addEventListener("click", function(event){
    if(event.target.any("playreset")){
        location.reload();
    }
})
