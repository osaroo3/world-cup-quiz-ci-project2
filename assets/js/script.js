// Run the quiz after the DOM has finished loading
// Get the button elements and add event listeners to them
console.log("yes");
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("enter-quiz").addEventListener("click", function (event) {
        event.preventDefault();
    });

    let buttons = document.getElementsByTagName("button");
    let EnterQuiz = document.getElementById("user_name");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (EnterQuiz.value === "") {
                alert("Please enter your user name");
            } else {
                runQuiz();
            }

            if (this.getAttribute("data-type") === "next") {
                nextQuestion();
            } else if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    };
    /*document.getElementById("start-quiz").addEventListener("keydown", function (event) {
     if (event.key === "Enter") {
         checkAnswer();
     }
 });*/
    /* document.getElementById("submit").addEventListener("keydown", function (event) {
         if (event.key === "Enter") {
             checkAnswer();
         }
    runGame("addition");
    
    });*/


});

function runQuiz() {
    let welcome = document.getElementsByClassName("welcome")[0];
    welcome.style.display = "none";
    let qOne = document.getElementsByClassName("question")[0];
    qOne.style.display = "inline-block";
    let nextQuestion = document.getElementById("next-question");
    nextQuestion.style.display = "inline-block";
    let mainSection = document.getElementById("main-section");
    mainSection.style.background = "none";
}