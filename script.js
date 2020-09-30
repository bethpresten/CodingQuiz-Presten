//pulling in variables from index.html
// console.log("Connection is working!")
var welcomeContainer = document.getElementById("welcome-container");
var quizButton = document.getElementById("start-quiz");
var answerContainer = document.getElementById("answer-container");
var questionContainer = document.getElementById("question-container");
var timerEl = document.getElementById("quiz-timer");
var feedbackEl = document.getElementById("feedback");

//beginning at question #1
var questionIndex = 0;

//timer variables
var secondsLeft = 75;
var penalty = 15;

//question bank questions and answers inserted into an array of objects
var quizBank = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "2. curly brackets",
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the answers are true"],
        answer: "4. all of the answers are true",
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
        answer: "4. console log",
    },
]
//defining the final question
var finalQuestion = quizBank[4];

//calling the function to populate the questions
function renderQuizBank() {
    questionContainer.innerHTML = "";
    var question = document.createElement("h2");
    question.textContent = quizBank[questionIndex].question;
    // questions now need to go in questionContainer
    // console.log(quizBank[questionIndex].question);
    questionContainer.append(question)
    renderChoices();
}

//calling the function to populate the answers
function renderChoices() {
    // console.log(choices);
    //empty the former answers out of the container and re-populate with the next answer set
    answerContainer.innerHTML = "";
    for (var i = 0; i < quizBank[questionIndex].choices.length; i++) {
        var choiceButtons = document.createElement("button");
        choiceButtons.setAttribute("style", "display:block; background-color: indigo; color: white; margin: 5px");
        choiceButtons.setAttribute("data-value", quizBank[questionIndex].choices[i]);
        choiceButtons.textContent = quizBank[questionIndex].choices[i];
        answerContainer.append(choiceButtons);
    }
}

//calling the function to recognize the correct answer
answerContainer.addEventListener("click", function (event) {
    var element = event.target;
    // console.log(element);
    var correctAnswer = quizBank[questionIndex].answer;
    // If that element is a button...
    if (element.matches("button") === true) {
        var answer = element.getAttribute("data-value");
        var createDiv = document.createElement("div");
        createDiv.innerHTML = " ";
        gradeAnswer();

        if (answer === correctAnswer) {
            // console.log(answer);
            // createDiv.textContent.innerHTML = "Correct!";
            gradeAnswer();
            questionIndex++;
            renderQuizBank();
        } else {
            // createDiv.textContent.innerHTML = "Incorrect!";
            // take 15 seconds off of running time
            secondsLeft = secondsLeft - penalty;
            gradeAnswer();
            questionIndex++;
            renderQuizBank();
        }
    }
    // console.log(quizBank[questionIndex].correctAnswer);

});

function gradeAnswer() {
    feedbackEl.setAttribute("class", "feedback");
    var currentQuestion = quizBank[questionIndex].answer;
    if (this.value !== currentQuestion.answer) {
        feedbackEl.textContent = "Incorrect";
        questionIndex++;
    }
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }

    // timerEl.textContent = secondsLeft;
    else {
        feedbackEl.textContent = "Correct!";
        questionIndex++;
    }

    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    questionIndex++;
    if (questionIndex === question.length) {
        quit();
    } else {
        renderQuizBank();
    }
}

window.onload = function () {
    timerEl.textContent = "Time: 0"
}

// giving the START QUIZ BUTTON FUNCTIONALITY:  starting the quiz as well as clearing the welcome and starting the timer
quizButton.addEventListener("click", function () {
    // console.log(quizButton, "You clicked!");
    welcomeContainer.style.display = "none";
    questionContainer.setAttribute("style", "display:block");
    setTime();
    // timer element
    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;

            timerEl.textContent = "Time: " + secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                showGrade();
            }
        }, 1000);
    }
    renderQuizBank();
});