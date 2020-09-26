// console.log("Connection is working!")
var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("start-quiz");
var quiz = document.createElement("quiz");
var options = document.getElementById("options");
var quizTimer = document.getElementById("quiz-timer")

var currentQuestion = 0;

var questionBank = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    }
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets",
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the answers are true"],
        answer: "all of the answers are true",
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log",
    },
]
startButton.addEventListener("click", function () {
    // console.log(startButton);
    welcomeContainer.style.display = "none";
    var optionsToDisplay = questions[currentQuestion].options;
    renderQuestionBank(questionToDisplay);
});

function renderQuiz() {
    for (var i = 0; Array.length[i]; i++) {

    }
}

function quizTimer() {
    timerSeconds = 30;
    var interval = setInterval(function () {
        timerSeconds--;
        timerDisplay.textContent = "Time: " + timerSeconds;

        if (timerSeconds === 0) {
            clearInterval(interval);
            var timesUp = timerDisplay("Time's Up!")
        }
    }, 1000);
}