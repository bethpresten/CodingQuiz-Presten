// console.log("Testing connection!")
var registerScore = document.getElementById("high-scores");
var showScore = document.getElementById("show-scores")
var inputName = document.getElementById("name-input")
var submitScoreButton = document.getElementById("submit-score-button")

function showGrade() {
    registerScore.style.display = "none";
    document.createElement("h3");
    document.textContent = "ALL DONE!";
    if (questionIndex === finalQuestion) {
        clearInterval(timerInterval);
        nameInput.value = " ";
        // registerGrade.innerHTML = "Your final score is a" + FINALTIME!
    }
    document.append(registerScore);
}