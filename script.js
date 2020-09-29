// console.log("Connection is working!")
var welcomeContainer = document.getElementById("welcome-container");
var quizButton = document.getElementById("start-quiz");
var answerContainer = document.getElementById("answer-container");
var questionContainer = document.getElementById("question-container");
var correctAnswer = document.getElementById("correct-answer");


// var timerDisplay = document.createElement("quiz-timer")
var questionIndex = 0;

var quizBank = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "curly brackets",
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the answers are true"],
        answer: "all of the answers are true",
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
        answer: "console log",
    },
]



function renderQuizBank() {
    questionContainer.innerHTML = "";
    var question = document.createElement("h2");
    question.textContent = quizBank[questionIndex].question;
    // questions now need to go in questionContainer
    console.log(quizBank[questionIndex].question);
    questionContainer.append(question)
    renderChoices();

}

function renderChoices() {
    // console.log(choices);
    //empty the former answers out of the container and re-populate with the next answer set
    answerContainer.innerHTML = "";
    for (var i = 0; i <= quizBank[questionIndex].choices.length; i++) {
        var choiceButtons = document.createElement("button");
        choiceButtons.setAttribute("style", "background-color: indigo; color: white; margin: 5px");
        choiceButtons.setAttribute("data-value", quizBank[questionIndex].choices[i]);
        choiceButtons.textContent = quizBank[questionIndex].choices[i];
        answerContainer.append(choiceButtons);
    }
}

function correctAnswer() {
    correctAnswer.setAttribute("data-value", quizBank[questionIndex].correctAnswer)
    // if ()
}

answerContainer.addEventListener("click", function (event) {
    var element = event.target;
    console.log(element);
    var correctAnswer = quizBank[questionIndex].answer
    // If that element is a button...
    if (element.matches("button") === true) {
        var answer = element.getAttribute("data-value");
        var createDiv = document.createElement("div");

        if (correctAnswer === answer) {
            createDiv.textContent = "Correct!";
            questionIndex++;

            console.log(answer);
            renderQuizBank();
        } else {
            createDiv.textContent = "Incorrect!";
            questionIndex++;
            renderQuizBank();

            // take 15 seconds off of timer

        }
    }
    console.log(questionIndex)
    // // answerToDisplay.textContent = correctAnswer;
    // answerContainer.append(createDiv);
})


quizButton.addEventListener("click", function () {
    // console.log(quizButton, "You clicked!");
    welcomeContainer.style.display = "none";
    questionContainer.setAttribute("style", "display:block");
    renderQuizBank();
});





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
        // }, 1000);
    // }
