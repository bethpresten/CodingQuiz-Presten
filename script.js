// console.log("Connection is working!")
var welcomeContainer = document.getElementById("welcome-container");
var quizButton = document.getElementById("start-quiz");
var answerContainer = document.getElementById("answer-container");
var questionContainer = document.getElementById("question-container");


// var timerDisplay = document.createElement("quiz-timer")

var currentQuestion = 0;

var renderQuestionBank = 0;

var questionBank = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
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

quizButton.addEventListener("click", function () {
    console.log(quizButton, "You clicked!");
    welcomeContainer.style.display = "none";
    // var question = questionBank.array(indexOf(question))
    // var questionToDisplay = question[currentQuestion].answer;
    // renderQuestionBank(questionToDisplay);
})

// function renderQuestionBank() {
//     for (var i = 0; question.length[i]; i++) {
//         var question = questionBank(indexOf[i]);
//         var choiceButtons = document.createElement("button");
//         choiceButton.setAttribute("style", "background-color: indigo");
//         choiceButtons.textContent = choices[i];
//         button.setAttribute("correct-answer"), array[i];
//         choices.append(button);
//     }



//     answers.addEventListener("click", function (event) {
//         if (event.target.matches("answer"){
//             var correctAnswer = event.target.getAttribute("correct-answer");



//         }
//     }
//     });


    // function quizTimer() {
    //     timerSeconds = 30;
    //     var interval = setInterval(function () {
    //         timerSeconds--;
    //         timerDisplay.textContent = "Time: " + timerSeconds;

    //         if (timerSeconds === 0) {
    //             clearInterval(interval);
    //             var timesUp = timerDisplay("Time's Up!")
    //         }
    //     }, 1000);
    // }
