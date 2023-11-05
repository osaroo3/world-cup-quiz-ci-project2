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

    // Make submit button visible
    let submitButton = document.getElementById("submit");
    submitButton.style.display = "inline-block";

    // Make scores-area visible
    let scoresArea = document.getElementsByClassName("scores-area")[0];
    scoresArea.style.display = "inline-block";

    //code to display quiz 
    let questions = document.getElementsByClassName("question");
    for (let question of questions) {
        question.style.display = "inline-block";
    }
    // Remove background image when quiz is run
    let bodi = document.getElementsByTagName("body")[0];
    bodi.style.background = "none";

    // Q1 code to tick correct or incorrect answers when clicked by user and hide all not clicked
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
    // Q1 incorrect answers
    let wrongButtonOne = document.getElementsByClassName("radio-button")[1];
    wrongButtonOne.addEventListener("click", function () {
        let wrongContainerOne = document.getElementsByClassName("radio-container")[1];
        if (wrongContainerOne.innerText === "Mali") {
            let incorrectCheckOne = document.getElementsByClassName("incorrect-check")[0];
            incorrectCheckOne.style.display = "inline-block";
            coverOne.style.display = "none";
            coverThree.style.display = "none";
            coverFour.style.display = "none";
        };
    });

    let wrongButtonTwo = document.getElementsByClassName("radio-button")[2];
    wrongButtonTwo.addEventListener("click", function () {
        let wrongContainerTwo = document.getElementsByClassName("radio-container")[2];
        if (wrongContainerTwo.innerText === "France") {
            let incorrectCheckTwo = document.getElementsByClassName("incorrect-check")[1];
            incorrectCheckTwo.style.display = "inline-block";
            coverOne.style.display = "none";
            coverTwo.style.display = "none";
            coverFour.style.display = "none";
        };
    });

    let wrongButtonThree = document.getElementsByClassName("radio-button")[3];
    wrongButtonThree.addEventListener("click", function () {
        let wrongContainerThree = document.getElementsByClassName("radio-container")[3];
        if (wrongContainerThree.innerText === "Nigeria") {
            let incorrectCheckThree = document.getElementsByClassName("incorrect-check")[2];
            incorrectCheckThree.style.display = "inline-block";
            coverOne.style.display = "none";
            coverTwo.style.display = "none";
            coverThree.style.display = "none";
        };
    });

    // Q2 code to tick correct or incorrect answers when clicked by user and hide all not clicked
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

    // Q2 incorrect answers
    let wrongButtonFour = document.getElementsByClassName("radio-button")[4];
    wrongButtonFour.addEventListener("click", function () {
        let wrongContainerFour = document.getElementsByClassName("radio-container")[4];
        if (wrongContainerFour.innerText === "Lionel Messi") {
            let incorrectCheckFour = document.getElementsByClassName("incorrect-check")[3];
            incorrectCheckFour.style.display = "inline-block";
            coverSix.style.display = "none";
            coverSeven.style.display = "none";
            coverEight.style.display = "none";
        };
    });

    let wrongButtonFive = document.getElementsByClassName("radio-button")[6];
    wrongButtonFive.addEventListener("click", function () {
        let wrongContainerFive = document.getElementsByClassName("radio-container")[6];
        if (wrongContainerFive.innerText === "Cristiano Ronaldo") {
            let incorrectCheckFive = document.getElementsByClassName("incorrect-check")[4];
            incorrectCheckFive.style.display = "inline-block";
            coverFive.style.display = "none";
            coverSix.style.display = "none";
            coverEight.style.display = "none";
        };
    });

    let wrongButtonSix = document.getElementsByClassName("radio-button")[7];
    wrongButtonSix.addEventListener("click", function () {
        let wrongContainerSix = document.getElementsByClassName("radio-container")[7];
        if (wrongContainerSix.innerText === "Wayne Rooney") {
            let incorrectCheckSix = document.getElementsByClassName("incorrect-check")[5];
            incorrectCheckSix.style.display = "inline-block";
            coverFive.style.display = "none";
            coverSix.style.display = "none";
            coverSeven.style.display = "none";
        };
    });

    // Q3 code to tick correct or incorrect answers when clicked by user and hide all not clicked
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
    // Q3 incorrect answers
    let wrongButtonSeven = document.getElementsByClassName("radio-button")[8];
    wrongButtonSeven.addEventListener("click", function () {
        let wrongContainerSeven = document.getElementsByClassName("radio-container")[8];
        if (wrongContainerSeven.innerText === "Kylian Mbappe") {
            let incorrectCheckSeven = document.getElementsByClassName("incorrect-check")[6];
            incorrectCheckSeven.style.display = "inline-block";
            coverTen.style.display = "none";
            coverEleven.style.display = "none";
            coverTwelve.style.display = "none";
        };
    });

    let wrongButtonEight = document.getElementsByClassName("radio-button")[9];
    wrongButtonEight.addEventListener("click", function () {
        let wrongContainerEight = document.getElementsByClassName("radio-container")[9];
        if (wrongContainerEight.innerText === "Harry Kane") {
            let incorrectCheckEight = document.getElementsByClassName("incorrect-check")[7];
            incorrectCheckEight.style.display = "inline-block";
            coverNine.style.display = "none";
            coverEleven.style.display = "none";
            coverTwelve.style.display = "none";
        };
    });

    let wrongButtonNine = document.getElementsByClassName("radio-button")[11];
    wrongButtonNine.addEventListener("click", function () {
        let wrongContainerNine = document.getElementsByClassName("radio-container")[11];
        if (wrongContainerNine.innerText === "David De Gea") {
            let incorrectCheckNine = document.getElementsByClassName("incorrect-check")[8];
            incorrectCheckNine.style.display = "inline-block";
            coverNine.style.display = "none";
            coverTen.style.display = "none";
            coverEleven.style.display = "none";
        };
    });

    // Q4 code to tick correct or incorrect answers when clicked by user and hide all not clicked
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
    // Q4 incorrect answers
    let wrongButtonTen = document.getElementsByClassName("radio-button")[12];
    wrongButtonTen.addEventListener("click", function () {
        let wrongContainerTen = document.getElementsByClassName("radio-container")[12];
        if (wrongContainerTen.innerText === "France") {
            let incorrectCheckTen = document.getElementsByClassName("incorrect-check")[9];
            incorrectCheckTen.style.display = "inline-block";
            coverFourteen.style.display = "none";
            coverFifteen.style.display = "none";
            coverSixteen.style.display = "none";
        };
    });

    let wrongButtonEleven = document.getElementsByClassName("radio-button")[13];
    wrongButtonEleven.addEventListener("click", function () {
        let wrongContainerEleven = document.getElementsByClassName("radio-container")[13];
        if (wrongContainerEleven.innerText === "England") {
            let incorrectCheckEleven = document.getElementsByClassName("incorrect-check")[10];
            incorrectCheckEleven.style.display = "inline-block";
            coverThirteen.style.display = "none";
            coverFifteen.style.display = "none";
            coverSixteen.style.display = "none";
        };
    });

    let wrongButtonTwelve = document.getElementsByClassName("radio-button")[14];
    wrongButtonTwelve.addEventListener("click", function () {
        let wrongContainerTwelve = document.getElementsByClassName("radio-container")[14];
        if (wrongContainerTwelve.innerText === "Nigeria") {
            let incorrectCheckTwelve = document.getElementsByClassName("incorrect-check")[11];
            incorrectCheckTwelve.style.display = "inline-block";
            coverThirteen.style.display = "none";
            coverFourteen.style.display = "none";
            coverSixteen.style.display = "none";
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

    // Q5 wrong answers
    let wrongButtonThirteen = document.getElementsByClassName("radio-button")[16];
    wrongButtonThirteen.addEventListener("click", function () {
        let wrongContainerThirteen = document.getElementsByClassName("radio-container")[16];
        if (wrongContainerThirteen.innerText === "Iran") {
            let incorrectCheckThirteen = document.getElementsByClassName("incorrect-check")[12];
            incorrectCheckThirteen.style.display = "inline-block";
            coverEighteen.style.display = "none";
            coverNineteen.style.display = "none";
            coverTwenty.style.display = "none";
        };
    });

    let wrongButtonFourteen = document.getElementsByClassName("radio-button")[17];
    wrongButtonFourteen.addEventListener("click", function () {
        let wrongContainerFourteen = document.getElementsByClassName("radio-container")[17];
        if (wrongContainerFourteen.innerText === "Tunisia") {
            let incorrectCheckFourteen = document.getElementsByClassName("incorrect-check")[13];
            incorrectCheckFourteen.style.display = "inline-block";
            coverSeventeen.style.display = "none";
            coverNineteen.style.display = "none";
            coverTwenty.style.display = "none";
        };
    });

    let wrongButtonFifteen = document.getElementsByClassName("radio-button")[19];
    wrongButtonFifteen.addEventListener("click", function () {
        let wrongContainerFifteen = document.getElementsByClassName("radio-container")[19];
        if (wrongContainerFifteen.innerText === "Mexico") {
            let incorrectCheckFifteen = document.getElementsByClassName("incorrect-check")[14];
            incorrectCheckFifteen.style.display = "inline-block";
            coverSeventeen.style.display = "none";
            coverEighteen.style.display = "none";
            coverNineteen.style.display = "none";

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
    //Q6 incorrect answers
    let wrongButtonSixteen = document.getElementsByClassName("radio-button")[21];
    wrongButtonSixteen.addEventListener("click", function () {
        let wrongContainerSixteen = document.getElementsByClassName("radio-container")[21];
        if (wrongContainerSixteen.innerText === "France") {
            let incorrectCheckSixteen = document.getElementsByClassName("incorrect-check")[15];
            incorrectCheckSixteen.style.display = "inline-block";
            coverTwentyOne.style.display = "none";
            coverTwentythree.style.display = "none";
            coverTwentyFour.style.display = "none";
        };
    });

    let wrongButtonSeventeen = document.getElementsByClassName("radio-button")[22];
    wrongButtonSeventeen.addEventListener("click", function () {
        let wrongContainerSeventeen = document.getElementsByClassName("radio-container")[22];
        if (wrongContainerSeventeen.innerText === "England") {
            let incorrectCheckSeventeen = document.getElementsByClassName("incorrect-check")[16];
            incorrectCheckSeventeen.style.display = "inline-block";
            coverTwentyOne.style.display = "none";
            coverTwentyTwo.style.display = "none";
            coverTwentyFour.style.display = "none";
        };
    });

    let wrongButtonEighteen = document.getElementsByClassName("radio-button")[23];
    wrongButtonEighteen.addEventListener("click", function () {
        let wrongContainerEighteen = document.getElementsByClassName("radio-container")[23];
        if (wrongContainerEighteen.innerText === "USA") {
            let incorrectCheckEighteen = document.getElementsByClassName("incorrect-check")[17];
            incorrectCheckEighteen.style.display = "inline-block";
            coverTwentyOne.style.display = "none";
            coverTwentyTwo.style.display = "none";
            coverTwentythree.style.display = "none";
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

    //Q7 incorrect answers

    let wrongButtonNineteen = document.getElementsByClassName("radio-button")[25];
    wrongButtonNineteen.addEventListener("click", function () {
        let wrongContainerNineteen = document.getElementsByClassName("radio-container")[25];
        if (wrongContainerNineteen.innerText === "Gabon") {
            let incorrectCheckNineteen = document.getElementsByClassName("incorrect-check")[18];
            incorrectCheckNineteen.style.display = "inline-block";
            coverTwentyFive.style.display = "none";
            coverTwentySeven.style.display = "none";
            coverTwentyEight.style.display = "none";
        };
    });

    let wrongButtonTwenty = document.getElementsByClassName("radio-button")[26];
    wrongButtonTwenty.addEventListener("click", function () {
        let wrongContainerTwenty = document.getElementsByClassName("radio-container")[26];
        if (wrongContainerTwenty.innerText === "Finland") {
            let incorrectCheckTwenty = document.getElementsByClassName("incorrect-check")[19];
            incorrectCheckTwenty.style.display = "inline-block";
            coverTwentyFive.style.display = "none";
            coverTwentySix.style.display = "none";
            coverTwentyEight.style.display = "none";
        };
    });

    let wrongButtonTwentyOne = document.getElementsByClassName("radio-button")[27];
    wrongButtonTwentyOne.addEventListener("click", function () {
        let wrongContainerTwentyOne = document.getElementsByClassName("radio-container")[27];
        if (wrongContainerTwentyOne.innerText === "Italy") {
            let incorrectCheckTwentyOne = document.getElementsByClassName("incorrect-check")[20];
            incorrectCheckTwentyOne.style.display = "inline-block";
            coverTwentyFive.style.display = "none";
            coverTwentySix.style.display = "none";
            coverTwentySeven.style.display = "none";
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

    // Q8 incorrect answers
    let wrongButtonTwentyTwo = document.getElementsByClassName("radio-button")[29];
    wrongButtonTwentyTwo.addEventListener("click", function () {
        let wrongContainerTwentyTwo = document.getElementsByClassName("radio-container")[29];
        if (wrongContainerTwentyTwo.innerText === "Lionel Messi") {
            let incorrectCheckTwentyTwo = document.getElementsByClassName("incorrect-check")[21];
            incorrectCheckTwentyTwo.style.display = "inline-block";
            coverTwentyNine.style.display = "none";
            coverThirtyOne.style.display = "none";
            coverThirtyTwo.style.display = "none";
        };
    });
    let wrongButtonTwentyThree = document.getElementsByClassName("radio-button")[30];
    wrongButtonTwentyThree.addEventListener("click", function () {
        let wrongContainerTwentyThree = document.getElementsByClassName("radio-container")[30];
        if (wrongContainerTwentyThree.innerText === "Harry Kane") {
            let incorrectCheckTwentyThree = document.getElementsByClassName("incorrect-check")[22];
            incorrectCheckTwentyThree.style.display = "inline-block";
            coverTwentyNine.style.display = "none";
            coverThirty.style.display = "none";
            coverThirtyTwo.style.display = "none";
        };
    });
    let wrongButtonTwentyFour = document.getElementsByClassName("radio-button")[31];
    wrongButtonTwentyFour.addEventListener("click", function () {
        let wrongContainerTwentyFour = document.getElementsByClassName("radio-container")[31];
        if (wrongContainerTwentyFour.innerText === "Erling Haaland") {
            let incorrectCheckTwentyFour = document.getElementsByClassName("incorrect-check")[23];
            incorrectCheckTwentyFour.style.display = "inline-block";
            coverTwentyNine.style.display = "none";
            coverThirty.style.display = "none";
            coverThirtyOne.style.display = "none";
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
        if (radioContainerThirtyFive.innerText === "0") {
            let correctCheckNine = document.getElementById("correct-answer-nine");
            correctCheckNine.style.display = "inline-block";
            coverThirtyThree.style.display = "none";
            coverThirtyFour.style.display = "none";
            coverThirtySix.style.display = "none";
        };
    });

    //Q9 incorrect answers
    let wrongButtonTwentyFive = document.getElementsByClassName("radio-button")[32];
    wrongButtonTwentyFive.addEventListener("click", function () {
        let wrongContainerTwentyFive = document.getElementsByClassName("radio-container")[32];
        if (wrongContainerTwentyFive.innerText === "5") {
            let incorrectCheckTwentyFive = document.getElementsByClassName("incorrect-check")[24];
            incorrectCheckTwentyFive.style.display = "inline-block";
            coverThirtyFour.style.display = "none";
            coverThirtyFive.style.display = "none";
            coverThirtySix.style.display = "none";
        };
    });

    let wrongButtonTwentySix = document.getElementsByClassName("radio-button")[33];
    wrongButtonTwentySix.addEventListener("click", function () {
        let wrongContainerTwentySix = document.getElementsByClassName("radio-container")[33];
        if (wrongContainerTwentySix.innerText === "2") {
            let incorrectCheckTwentySix = document.getElementsByClassName("incorrect-check")[25];
            incorrectCheckTwentySix.style.display = "inline-block";
            coverThirtyThree.style.display = "none";
            coverThirtyFive.style.display = "none";
            coverThirtySix.style.display = "none";
        };
    });

    let wrongButtonTwentySeven = document.getElementsByClassName("radio-button")[35];
    wrongButtonTwentySeven.addEventListener("click", function () {
        let wrongContainerTwentySeven = document.getElementsByClassName("radio-container")[35];
        if (wrongContainerTwentySeven.innerText === "3") {
            let incorrectCheckTwentySeven = document.getElementsByClassName("incorrect-check")[26];
            incorrectCheckTwentySeven.style.display = "inline-block";
            coverThirtyThree.style.display = "none";
            coverThirtyFour.style.display = "none";
            coverThirtyFive.style.display = "none";
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
    // Q10 incorrect answers
    let wrongButtonTwentyEight = document.getElementsByClassName("radio-button")[37];
    wrongButtonTwentyEight.addEventListener("click", function () {
        let wrongContainerTwentyEight = document.getElementsByClassName("radio-container")[37];
        if (wrongContainerTwentyEight.innerText === "Mali") {
            let incorrectCheckTwentyEight = document.getElementsByClassName("incorrect-check")[27];
            incorrectCheckTwentyEight.style.display = "inline-block";
            coverThirtySeven.style.display = "none";
            coverThirtyNine.style.display = "none";
            coverForty.style.display = "none";
        };
    });

    let wrongButtonTwentyNine = document.getElementsByClassName("radio-button")[38];
    wrongButtonTwentyNine.addEventListener("click", function () {
        let wrongContainerTwentyNine = document.getElementsByClassName("radio-container")[38];
        if (wrongContainerTwentyNine.innerText === "Niger") {
            let incorrectCheckTwentyNine = document.getElementsByClassName("incorrect-check")[28];
            incorrectCheckTwentyNine.style.display = "inline-block";
            coverThirtySeven.style.display = "none";
            coverThirtyEight.style.display = "none";
            coverForty.style.display = "none";
        };
    });

    let wrongButtonThirty = document.getElementsByClassName("radio-button")[39];
    wrongButtonThirty.addEventListener("click", function () {
        let wrongContainerThirty = document.getElementsByClassName("radio-container")[39];
        if (wrongContainerThirty.innerText === "Scotland") {
            let incorrectCheckThirty = document.getElementsByClassName("incorrect-check")[29];
            incorrectCheckThirty.style.display = "inline-block";
            coverThirtySeven.style.display = "none";
            coverThirtyEight.style.display = "none";
            coverThirtyNine.style.display = "none";
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
/**
 * Retrieves the DOM current score of correct  and incremase it by 1
 *  and increase it by 1
 */
function incrementCorrectScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}