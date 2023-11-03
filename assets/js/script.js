// Run the quiz after the DOM has finished loading
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    //Prevent default form submission
    document.getElementById("enter-quiz").addEventListener("click", function (event) {
        event.preventDefault();
    });

    let buttons = document.getElementsByTagName("button");
    let EnterQuiz = document.getElementById("user_name");
    for (let button of buttons) {
        //Prevent user from accessing the quiz if username is not provided
        button.addEventListener("click", function () {
            if (EnterQuiz.value === "") {
                alert("Please enter your user name");
            } else if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                runQuiz();
            }
        });
    };
    /* document.getElementById("start-quiz").addEventListener("keydown", function (event) {
         if (event.key === "Enter") {
             checkAnswer();
         }
     });
     document.getElementById("submit").addEventListener("keydown", function (event) {
         if (event.key === "Enter") {
             checkAnswer();
         }
 
     });*/

});
// This fuction takes the user to the quiz environment
function runQuiz() {
    hideWelcomeDiv();

    let submitButton = document.getElementById("submit");
    submitButton.style.display = "inline-block";

    let questions = document.getElementsByClassName("question");
    for (let question of questions) {
        question.style.display = "inline-block";
    }
    // Remove background image when quiz is run
    let mainSection = document.getElementById("main-section");
    mainSection.style.background = "inline-bock";

};
function checkAnswer() {
    let radioContainerOne = document.getElementsByClassName("radio-container")[0];
    radioContainerOne.addEventListener("click", function () {
        let correctCheckOne = document.getElementById("correct-answer-one");
        if (correctCheckOne.value) {
            correctCheckOne.style.display = "inline-block";
        }
    });
}

function hideWelcomeDiv() {
    let welcome = document.getElementsByClassName("welcome")[0];
    welcome.style.display = "none";
}

function hideQuestionDivs() {
    let questions = document.getElementsByClassName("question");
    for (let q of questions) {
        q.style.display = "none";
    }
};
//function displayCheck() {
     //   let correctCheckOne = document.getElementById("correct-answer-one");
      //  correctCheckOne.style.display = "none";
    //}


/*
function numCounter() {
    let oldScore = parseInt(document.getElementById("counter").innerText);
    document.getElementById("counter").innerText = ++oldScore;
}
*/