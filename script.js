//pulling in variables from index.html
// console.log("Connection is working!")
var welcomeContainer = document.getElementById("welcome-container");
var quizButton = document.getElementById("start-quiz");
var answerContainer = document.getElementById("answer-container");
var questionContainer = document.getElementById("question-container");
var timerEl = document.getElementById("quiz-timer");
var feedbackEl = document.getElementById("feedback");
var submitScoreButton = document.createElement("button");

//beginning at question #1
var questionIndex = 0;

//timer variables
var secondsLeft = 75;
var penalty = 15;
var timerInterval;

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
        answer: "3. parentheses",
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


//calling the function to populate the questions
function renderQuizBank() {
    if (questionIndex === quizBank.length) {
        endQuiz();
    } else {
        questionContainer.innerHTML = "";
        var question = document.createElement("h1");
        question = quizBank[questionIndex].question;
        question.textContent = quizBank.question;
        // questions now need to go in questionContainer
        // console.log(quizBank[questionIndex].question);
        questionContainer.append(question);
        renderChoices();
    }
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
    // feedbackEl.setAttribute(“class ”, “feedback”);
    // feedbackEl.setAttribute(“style”, “margin: auto; width: 50 %“);
    var element = event.target;
    var correctAnswer = quizBank[questionIndex].answer;
    // If that element is a button...
    if (element.matches("button") === true) {
        console.log(element.getAttribute("data-value"));
        // console.log(correctAnswer);
        questionIndex++;
        renderQuizBank();

        if (correctAnswer === element.getAttribute("data-value")) {
            feedbackEl.textContent = "Correct!";
        }

        else {
            // take 15 seconds off of running time
            feedbackEl.textContent = "Incorrect!"
            secondsLeft = secondsLeft - penalty;
        }
        if (questionIndex === quizBank.length) {
            endQuiz();
            clearInterval(interval);
        }
    }
})
// console.log(quizBank[questionIndex].correctAnswer);

//     setTimeout(function () {
//         feedbackEl.style.display = "none";
//         feedbackEl.setAttribute("class", "feedback hide");
//     }, 1000);



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
        timerInterval = setInterval(function () {
            secondsLeft--;

            timerEl.textContent = "Time: " + secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                // showScore();
            }
        }, 1000);
    }
    renderQuizBank();
});

// function stopQuizTimer() {
//     clearInterval(holdInterval);
//     var remainingTime = secondsLeft;
// }

//End game and save score
function endQuiz() {
    // stopQuizTimer();
    questionContainer.innerHTML = "";
    answerContainer.innerHTML = "";
    feedbackEl.innerHTML = "";
    var allDoneEl = document.getElementById("all-done");
    allDoneEl.setAttribute("style", "font-size: 30px");
    allDoneEl.textContent = "All done!"
    var showScoreEl = document.getElementById("show-score");
    var initialInput = document.getElementById("hide");
    initialInput.removeAttribute("id");
    initialInput = ("style", "display:block");
    showScoreEl.textContent = "Your final score is " + secondsLeft;
    submitScoreButton.textContent = "Submit Score";
    submitScoreButton.setAttribute("style", "display:block; background-color: indigo; color: white; margin: 5px");
    showScoreEl.append(submitScoreButton);
}

submitScoreButton.addEventListener("click", function () {
    window.location.replace("./highscores.html");
    var initialInfo = document.getElementById("hide");
})
//     showScoreEl.push(initialObj);

//     function saveScores() {
//         var initials = initialInput.value.trim()
//         var highScores = localStorage.getItem("highScores", JSON.parse(score));
//     });
// var initialObj {
//     user: initials,
//     score: secondsLeft;
// }
// highScores.push(newScore);
// window.localStorage.setItem("highscores", JSON.strigify(score);
// }

