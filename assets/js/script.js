// Run the quiz after the DOM has finished loading
// Get the button elements and add event listeners to them
//console.log("yes");
//let radioContainerT = document.getElementsByClassName("radio-container")[28];
//console.log(radioContainerT.innerText);

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
    let bodi = document.getElementsByTagName("body")[0];
    bodi.style.background = "none";

    //code to display quiz 
    let mainSection = document.getElementById("main-section");
    mainSection.style.background = "inline-bock";

    // Q1 code to tick correct or incorrect answers when clicked by user and hide all not cliked
    let coverOne = document.getElementsByClassName("cover")[0];
    let coverTwo = document.getElementsByClassName("cover")[1];
    let coverThree = document.getElementsByClassName("cover")[2];
    let coverFour = document.getElementsByClassName("cover")[3];

    let radioButtonOne = document.getElementsByClassName("radio-button")[0];
    radioButtonOne.addEventListener("click", function () {
        let radioContainerOne = document.getElementsByClassName("radio-container")[0];
        if (radioContainerOne.innerText === "Argentina") {
            let correctCheckOne = document.getElementById("correct-answer-one");
            correctCheckOne.style.display = "inline-block";
            coverTwo.style.display = "none";
            coverThree.style.display = "none";
            coverFour.style.display = "none";
        };
    });

    // Q2 code to tick correct or incorrect answers when clicked by user and hide all not cliked
    let coverFive = document.getElementsByClassName("cover")[4];
    let coverSix = document.getElementsByClassName("cover")[5];
    let coverSeven = document.getElementsByClassName("cover")[6];
    let coverEight = document.getElementsByClassName("cover")[7];

    let radioButtonSix = document.getElementsByClassName("radio-button")[5];
    radioButtonSix.addEventListener("click", function () {
        let radioContainerSix = document.getElementsByClassName("radio-container")[5];
        if (radioContainerSix.innerText === "Enner Valencia") {
            let correctCheckTwo = document.getElementById("correct-answer-two");
            correctCheckTwo.style.display = "inline-block";
            coverFive.style.display = "none";
            coverSeven.style.display = "none";
            coverEight.style.display = "none";
        };
    });
    // Q3 code to tick correct or incorrect answers when clicked by user and hide all not cliked
    let coverNine = document.getElementsByClassName("cover")[8];
    let coverTen = document.getElementsByClassName("cover")[9];
    let coverEleven = document.getElementsByClassName("cover")[10];
    let coverTwelve = document.getElementsByClassName("cover")[11];

    let radioButtonEleven = document.getElementsByClassName("radio-button")[10];
    radioButtonEleven.addEventListener("click", function () {
        let radioContainerEleven = document.getElementsByClassName("radio-container")[10];
        if (radioContainerEleven.innerText === "Lionel Messi") {
            let correctCheckThree = document.getElementById("correct-answer-three");
            correctCheckThree.style.display = "inline-block";
            coverNine.style.display = "none";
            coverTen.style.display = "none";
            coverTwelve.style.display = "none";
        };
    });

    // Q4 code to tick correct or incorrect answers when clicked by user and hide all not cliked
    let coverThirteen = document.getElementsByClassName("cover")[12];
    let coverFourteen = document.getElementsByClassName("cover")[13];
    let coverFifteen = document.getElementsByClassName("cover")[14];
    let coverSixteen = document.getElementsByClassName("cover")[15];

    let radioButtonSixteen = document.getElementsByClassName("radio-button")[15];
    radioButtonSixteen.addEventListener("click", function () {
        let radioContainerSixteen = document.getElementsByClassName("radio-container")[15];
        if (radioContainerSixteen.innerText === "Morocco") {
            let correctCheckFour = document.getElementById("correct-answer-four");
            correctCheckFour.style.display = "inline-block";
            coverThirteen.style.display = "none";
            coverFourteen.style.display = "none";
            coverFifteen.style.display = "none";
        };
    });

    // Q5 code to tick correct or incorrect answers when clicked by user and hide all not cliked
    let coverSeventeen = document.getElementsByClassName("cover")[16];
    let coverEighteen = document.getElementsByClassName("cover")[17];
    let coverNineteen = document.getElementsByClassName("cover")[18];
    let coverTwenty = document.getElementsByClassName("cover")[19];

    let radioButtonNineteen = document.getElementsByClassName("radio-button")[18];
    radioButtonNineteen.addEventListener("click", function () {
        let radioContainerNineteen = document.getElementsByClassName("radio-container")[18];
        if (radioContainerNineteen.innerText === "Saudi Arabia") {
            let correctCheckFive = document.getElementById("correct-answer-five");
            correctCheckFive.style.display = "inline-block";
            coverSeventeen.style.display = "none";
            coverEighteen.style.display = "none";
            coverTwenty.style.display = "none";
        };
    });

    // Q6 code to tick correct or incorrect answers when clicked by user and hide all not cliked
    let coverTwentyOne = document.getElementsByClassName("cover")[20];
    let coverTwentyTwo = document.getElementsByClassName("cover")[21];
    let coverTwentythree = document.getElementsByClassName("cover")[22];
    let coverTwentyFour = document.getElementsByClassName("cover")[23];

    let radioButtonTwentyOne = document.getElementsByClassName("radio-button")[20];
    radioButtonTwentyOne.addEventListener("click", function () {
        let radioContainerTwentyOne = document.getElementsByClassName("radio-container")[20];
        if (radioContainerTwentyOne.innerText === "No country") {
            let correctCheckSix = document.getElementById("correct-answer-six");
            correctCheckSix.style.display = "inline-block";
            coverTwentyTwo.style.display = "none";
            coverTwentythree.style.display = "none";
            coverTwentyFour.style.display = "none";
        };
    });

    // Q7 code to tick correct or incorrect answers when clicked by user and hide all not cliked
    let coverTwentyFive = document.getElementsByClassName("cover")[24];
    let coverTwentySix = document.getElementsByClassName("cover")[25];
    let coverTwentySeven = document.getElementsByClassName("cover")[26];
    let coverTwentyEight = document.getElementsByClassName("cover")[27];

    let radioButtonTwentyFive = document.getElementsByClassName("radio-button")[24];
    radioButtonTwentyFive.addEventListener("click", function () {
        let radioContainerTwentyFive = document.getElementsByClassName("radio-container")[24];
        if (radioContainerTwentyFive.innerText === "Croatia") {
            let correctCheckSeven = document.getElementById("correct-answer-seven");
            correctCheckSeven.style.display = "inline-block";
            coverTwentySix.style.display = "none";
            coverTwentySeven.style.display = "none";
            coverTwentyEight.style.display = "none";
        };
    });
    // Q8 code to tick correct or incorrect answers when clicked by user and hide all not cliked
    let coverTwentyNine = document.getElementsByClassName("cover")[28];
    let coverThirty = document.getElementsByClassName("cover")[29];
    let coverThirtyOne = document.getElementsByClassName("cover")[30];
    let coverThirtyTwo = document.getElementsByClassName("cover")[31];

    let radioButtonTwentyNine = document.getElementsByClassName("radio-button")[28];
    radioButtonTwentyNine.addEventListener("click", function () {
        let radioContainerTwentyNine = document.getElementsByClassName("radio-container")[28];
        if (radioContainerTwentyNine.innerText === "Kylian Mbappe") {
            let correctCheckEight = document.getElementById("correct-answer-eight");
            correctCheckEight.style.display = "inline-block";
            coverThirty.style.display = "none";
            coverThirtyOne.style.display = "none";
            coverThirtyTwo.style.display = "none";
        };
    });
    // Q9 code to tick correct or incorrect answers when clicked by user and hide all not cliked
    let coverThirtyThree = document.getElementsByClassName("cover")[32];
    let coverThirtyFour = document.getElementsByClassName("cover")[33];
    let coverThirtyFive = document.getElementsByClassName("cover")[34];
    let coverThirtySix = document.getElementsByClassName("cover")[35];

    let radioButtonThirtyFive = document.getElementsByClassName("radio-button")[34];
    radioButtonThirtyFive.addEventListener("click", function () {
        let radioContainerThirtyFive = document.getElementsByClassName("radio-container")[34];
        if (radioContainerThirtyFive.innerText === "zero") {
            let correctCheckNine = document.getElementById("correct-answer-nine");
            correctCheckNine.style.display = "inline-block";
            coverThirtyThree.style.display = "none";
            coverThirtyFour.style.display = "none";
            coverThirtySix.style.display = "none";
        };
    });
    // Q10 code to tick correct or incorrect answers when clicked by user and hide all not cliked
    let coverThirtySeven = document.getElementsByClassName("cover")[36];
    let coverThirtyEight = document.getElementsByClassName("cover")[37];
    let coverThirtyNine = document.getElementsByClassName("cover")[38];
    let coverForty = document.getElementsByClassName("cover")[39];

    let radioButtonThirtySeven = document.getElementsByClassName("radio-button")[36];
    radioButtonThirtySeven.addEventListener("click", function () {
        let radioContainerThirtySeven = document.getElementsByClassName("radio-container")[36];
        if (radioContainerThirtySeven.innerText === "None") {
            let correctCheckTen = document.getElementById("correct-answer-ten");
            correctCheckTen.style.display = "inline-block";
            coverThirtyEight.style.display = "none";
            coverThirtyNine.style.display = "none";
            coverForty.style.display = "none";
        };
    });

};
function checkAnswer() {
    alert("congratulations");

};
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
/*
//function displayCheck() {
     //   let correctCheckOne = document.getElementById("correct-answer-one");
      //  correctCheckOne.style.display = "none";
    //}
function numCounter() {
    let oldScore = parseInt(document.getElementById("counter").innerText);
    document.getElementById("counter").innerText = ++oldScore;
}
*/