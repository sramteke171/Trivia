//Grab html elements
const playBtn = document.querySelector("#play-btn");
const resetBtn = document.querySelector("#reset-btn");
const changeMessage = document.querySelector("#transparentBox p");
let transparentDiv = document.querySelector(".transparentBox");
const user1Name = document.querySelector("#name-text");
const user1display = document.querySelector("#user1-name");
const preQue = document.querySelector(".questions p");
const preAns = document.querySelector(".questions");
const p_user1 = document.querySelector("#p_user1");

//"imageDiv - variable to create new div for image panel that will have multiple images"
//"questionP - to add question to Q&A pnael; answerP - to add answer to Q&A pnael"
let imageDiv = document.createElement("div");
let questionP = document.createElement("p");
let answerP = document.createElement("p");
let user1Score = 0;
let user1winMoney = 0;
let player = null;
let winner = "false";
let index;

let questionsArray = [
    "Q1. Where is Taj Mahal? Click on country flag! ",
    "Q2. What country is called `Land of Fire and Ice`? ",
    "Q3. What country is made up of 3,000 islands? ",
    "Q4. What country celebrates its New Year with people dancing underneath a dragon costume? ",
    "Q5. What country is less than a hundred miles away from the U.S. state - FLORIDA? ",
    "Q6. Luxury vehicles such as Ferrari, Maserati, and Lamborghini are manufactured in what country? ",
    "Q7. Where is `Mount Everest`? ",
    "Q8. Brendan Eich created the JavaScript programming language, Where is he from? ",
    "Q9. Niagara Falls is located in the United States and what other country? ",
    "Q10. True champagne can only come from grapes grown in the Champagne region of what country? "
];
let answersArray = ["(A1) - India, ", "(A2) - Iceland, ", "(A3) - Japan, ", "(A4) - China, ", "(A5) - Cuba, ", "(A6) - Italy, ", "(A7) - Nepal, ", "(A8) - USA, ", "(A9) - Canada, ", "(A10) - France"];

const gameEndMsg = "Game Ends! See you in another game!!"
resetBtn.disabled = true;
let counter = 60;

let play = () => {
    if (playBtn.value === "PLAY") {
        if (user1Name.value === "") {
            alert("please enter name");
        } else {
            changeMessage.innerHTML = questionsArray[0];
            playBtn.value = "Next";
            user1Name.remove();
            user1display.innerHTML = `Welcome ${(user1Name.value)}!`;
            p_user1.innerHTML = `Score - ${user1Score}/10`;
            resetBtn.disabled = false;

            showImagePanel();

            //Timer starts when PLAY button is clicked
            let interval = setInterval(() => {
                if (playBtn.value === "Next" || playBtn.value === "This is Last Question") {
                    triviaTimer();
                }
            }, 1000);

            let counter = 60;
            let triviaTimer = () => {
                if (counter > 0) { document.querySelector("#timer").innerHTML = `Remaining Time = ${counter--} seconds`; }
                else if (counter === 0) {
                    alert("TRIVIA TIME UP");
                    document.querySelector("#timer").remove();
                    changeMessage.innerHTML = gameEndMsg;
                    playBtn.value = "Quiz Timed Out"
                    playBtn.disabled = true;
                    winLogic();
                }
            };
        }
    }
    //Q2-What country is called `Land of Fire and Ice`? (iceland)
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[0])) {
        changeMessage.innerHTML = questionsArray[1];
        showImagePanel();
        user1display.innerHTML = "";
    }
    //Q3-What country is made up of 3,000 islands? "
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[1])) {
        changeMessage.innerHTML = questionsArray[2];
        showImagePanel();
        user1display.innerHTML = "";
    }
    //Q4-What country celebrates its New Year with people dancing underneath a dragon costume?
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[2])) {
        changeMessage.innerHTML = questionsArray[3];
        showImagePanel();
        user1display.innerHTML = "";
    }
    //Q5-What country is less than a hundred miles away from the U.S. state - FLORIDA?
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[3])) {
        changeMessage.innerHTML = questionsArray[4];
        showImagePanel();
        user1display.innerHTML = "";
    }
    //Q6- Luxury vehicles such as Ferrari, Maserati, and Lamborghini are manufactured in what country? (italy)
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[4])) {
        changeMessage.innerHTML = questionsArray[5];
        showImagePanel();
        user1display.innerHTML = "";
    }
    //Q7- Where is `Mount Everest`? (nepal)
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[5])) {
        changeMessage.innerHTML = questionsArray[6];
        showImagePanel();
        user1display.innerHTML = "";
    }
    //Q8- Brendan Eich created the JavaScript programming language, Where is he from? (usa)
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[6])) {
        changeMessage.innerHTML = questionsArray[7];
        showImagePanel();
        user1display.innerHTML = "";
    }
    //Q9-Niagara Falls is located in the United States and what other country?
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[7])) {
        changeMessage.innerHTML = questionsArray[8];
        showImagePanel();
        user1display.innerHTML = "";
    }
    //10-True champagne can only come from grapes grown in the Champagne region of what country?
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[8])) {
        changeMessage.innerHTML = questionsArray[9];
        showImagePanel();
        user1display.innerHTML = "";
        playBtn.value = "This is Last Question";
    }
    else if ((playBtn.value === "Show Results")) {
        //if user clicks show button before timer expires
        if (counter > 0) { document.querySelector("#timer").remove(); }
        changeMessage.innerHTML = gameEndMsg;
        winLogic();
        playBtn.disabled = true;
    }
    else {
        return false;
    }
}
//show options for answer 
let showImagePanel = () => {

    let imgArray = [];
    let imgArrayLength = 3; //for 3 images of each question
    let getImgArray;

    //create img, add class to img, then add img to newly created DIV(imgDiv)
    for (i = 0; i < imgArrayLength; i++) {
        imgArray[i] = document.createElement("img");
        imgArray[i].classList.add("image");
        imageDiv.appendChild(imgArray[i]);
    }

    //If Q1 then call showAnswerOne()
    if (changeMessage.innerHTML === questionsArray[0]) {
        imgArray[0].src = "css/india.png"; imgArray[1].src = "css/bolivia.png"; imgArray[2].src = "css/ghana.png";
        transparentDiv.appendChild(imageDiv);
        imageDiv.addEventListener("click", showAnswerOne);
    }
    //Q2 t= documhen call showAnswerTwo()
    else if (changeMessage.innerHTML === questionsArray[1]) {
        getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/france.png"; getImgArray[1].src = "css/iceland.png"; getImgArray[2].src = "css/romania.jpeg";
        imageDiv.addEventListener("click", showAnswerTwo);
    }
    //Q3 then call showAnswerThree()
    else if (changeMessage.innerHTML === questionsArray[2]) {
        getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/canada.png"; getImgArray[1].src = "css/brazil.png"; getImgArray[2].src = "css/japan.png";
        imageDiv.addEventListener("click", showAnswerThree);
    }
    //Q4  - What country celebrates its New Year with people dancing underneath a dragon costume? (china)
    else if (changeMessage.innerHTML === questionsArray[3]) {
        getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/southKorea.png"; getImgArray[1].src = "css/china.png"; getImgArray[2].src = "css/thailand.png";
        imageDiv.addEventListener("click", showAnswerFour);
    }
    //Q5-What country is less than a hundred miles away from the U.S. state - FLORIDA?
    else if (changeMessage.innerHTML === questionsArray[4]) {
        getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/jamaica.png"; getImgArray[1].src = "css/mexico.png"; getImgArray[2].src = "css/cuba.png";
        imageDiv.addEventListener("click", showAnswerFive);
    }
    //Q6- Luxury vehicles such as Ferrari, Maserati, and Lamborghini are manufactured in what country? (italy)
    else if (changeMessage.innerHTML === questionsArray[5]) {
        getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/italy.png"; getImgArray[1].src = "css/germany.png"; getImgArray[2].src = "css/usa.png";
        imageDiv.addEventListener("click", showAnswerSix);
    }
    //Q7- Where is `Mount Everest`? (nepal)
    else if (changeMessage.innerHTML === questionsArray[6]) {
        getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/china.png"; getImgArray[1].src = "css/nepal.png"; getImgArray[2].src = "css/india.png";
        imageDiv.addEventListener("click", showAnswerSeven);
    }
    //Q8- Brendan Eich created the JavaScript programming language, Where is he from? (usa)
    else if (changeMessage.innerHTML === questionsArray[7]) {
        getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/germany.png"; getImgArray[1].src = "css/canada.png"; getImgArray[2].src = "css/usa.png";
        imageDiv.addEventListener("click", showAnswerEight);
    }
    //Q9 - Niagara Falls is located in the United States and what other country? (Canada)
    else if (changeMessage.innerHTML === questionsArray[8]) {
        getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/brazil.png"; getImgArray[1].src = "css/canada.png"; getImgArray[2].src = "css/mexico.png";
        imageDiv.addEventListener("click", showAnswerNine);
    }
    //10- True champagne can only come from grapes grown in the Champagne region of what country?
    else if (changeMessage.innerHTML === questionsArray[9]) {
        getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/france.png"; getImgArray[1].src = "css/italy.png"; getImgArray[2].src = "css/germany.png";
        imageDiv.addEventListener("click", showAnswerTen);
    }
    else {
        return false;
    }
}//end showImagePanel function


//Function to Find which image was clicked
let findImgClicked = () => {
    let transparentImgDiv = document.querySelectorAll(".transparentBox img");
    let tranImgArray = Array.from(transparentImgDiv);

    //Find the index of the image from ImgArray ==> that the user clicks
    index = tranImgArray.findIndex(function (image) {
        return image === event.target;
    });
}

//Q1 - Where is Taj Mahal? Click on country flag (india)
let showAnswerOne = () => {
    findImgClicked();

    if (index === 0) { //india flag clicked
        user1display.innerHTML = '<span style="color:blue"> You got it </span>' + `${(answersArray[index])} is correct answer.
        click Next to continue`;
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
    }
    else if (index === 1 || index === 2) {
        user1display.innerHTML = '<span style="color:red"> Wrong Answer </span>' + `click Next to continue`;
        user1Score += 0; user1winMoney += 0;
    } else {
        return false;
    }
    //add Q&A to Q&A panel at the bottom
    questionP.innerHTML += questionsArray[0]; preQue.appendChild(questionP);
    answerP.innerHTML += answersArray[0]; preAns.appendChild(answerP);
    imageDiv.removeEventListener("click", showAnswerOne);
};

//Q2 - What country is called `Land of Fire and Ice`?
let showAnswerTwo = () => {
    findImgClicked();

    if (index === 1) {
        user1display.innerHTML = '<span style="color:blue"> You got it </span>' + `${(answersArray[index])} is correct answer.
        click Next to continue`;
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score} /10`;
    }
    else if (index === 0 || index === 2) {
        user1display.innerHTML = '<span style="color:red"> Wrong Answer </span>' + `click Next to continue`;
        user1Score += 0; user1winMoney += 0;
    } else {
        return false;
    }
    //add Q&A to Q&A panel at the bottom
    questionP.innerHTML += questionsArray[1]; preQue.appendChild(questionP);
    answerP.innerHTML += answersArray[1]; preAns.appendChild(answerP);
    imageDiv.removeEventListener("click", showAnswerTwo);
};

//Q3 - What country is made up of 3,000 islands? (Japan)
let showAnswerThree = () => {
    findImgClicked();

    if (index === 2) {
        user1display.innerHTML = '<span style="color:blue"> You got it </span>' + `${(answersArray[index])} is correct answer.
        click Next to continue`;
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
    }
    else if (index === 0 || index === 1) {
        user1display.innerHTML = '<span style="color:red"> Wrong Answer </span>' + `click Next to continue`;
        user1Score += 0; user1winMoney += 0;
    } else {
        return false;
    }
    //add Q&A to Q&A panel at the bottom
    questionP.innerHTML += questionsArray[2]; preQue.appendChild(questionP);
    answerP.innerHTML += answersArray[2]; preAns.appendChild(answerP);
    imageDiv.removeEventListener("click", showAnswerThree);
};

//Q4 - What country celebrates its New Year with people dancing underneath a dragon costume (China)
let showAnswerFour = () => {
    findImgClicked();

    if (index === 1) {
        user1display.innerHTML = '<span style="color:blue"> You got it </span>' + `${(answersArray[3])} is correct answer.
        click Next to continue`;
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
    }
    else if (index === 0 || index === 2) {
        user1display.innerHTML = '<span style="color:red"> Wrong Answer </span>' + `click Next to continue`;
        user1Score += 0; user1winMoney += 0;
    } else {
        return false;
    }
    //add Q&A to Q&A panel at the bottom
    questionP.innerHTML += questionsArray[3]; preQue.appendChild(questionP);
    answerP.innerHTML += answersArray[3]; preAns.appendChild(answerP);
    imageDiv.removeEventListener("click", showAnswerFour);
};

//Q5 - What country is less than a hundred miles away from the U.S. state - FLORIDA? (CUBA)
let showAnswerFive = () => {
    findImgClicked();

    if (index === 2) {
        user1display.innerHTML = '<span style="color:blue"> You got it </span>' + `${(answersArray[4])} is correct answer.
        click Next to continue`;
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
    }
    else if (index === 0 || index === 1) {
        user1display.innerHTML = '<span style="color:red"> Wrong Answer </span>' + `click Next to continue`;
        user1Score += 0; user1winMoney += 0;
    } else {
        return false;
    }
    //add Q&A to Q&A panel at the bottom
    questionP.innerHTML += questionsArray[4]; preQue.appendChild(questionP);
    answerP.innerHTML += answersArray[4]; preAns.appendChild(answerP);
    imageDiv.removeEventListener("click", showAnswerFive);
};

//Q6- Luxury vehicles such as Ferrari, Maserati, and Lamborghini are manufactured in what country? (italy)
let showAnswerSix = () => {
    findImgClicked();

    if (index === 0) {
        user1display.innerHTML = '<span style="color:blue"> You got it </span>' + `${(answersArray[5])} is correct answer.
        click Next to continue`;
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
    }
    else if (index === 1 || index === 2) {
        user1display.innerHTML = '<span style="color:red"> Wrong Answer </span>' + `click Next to continue`;
        user1Score += 0; user1winMoney += 0;
    } else {
        return false;
    }
    //add Q&A to Q&A panel at the bottom
    questionP.innerHTML += questionsArray[5]; preQue.appendChild(questionP);
    answerP.innerHTML += answersArray[5]; preAns.appendChild(answerP);
    imageDiv.removeEventListener("click", showAnswerSix);
};

//Q7- Where is `Mount Everest`? (nepal)
let showAnswerSeven = () => {
    findImgClicked();

    if (index === 1) {
        user1display.innerHTML = '<span style="color:blue"> You got it </span>' + `${(answersArray[6])} is correct answer.
        click Next to continue`;
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
    }
    else if (index === 0 || index === 2) {
        user1display.innerHTML = '<span style="color:red"> Wrong Answer </span>' + `click Next to continue`;
        user1Score += 0; user1winMoney += 0;
    } else {
        return false;
    }
    //add Q&A to Q&A panel at the bottom
    questionP.innerHTML += questionsArray[6]; preQue.appendChild(questionP);
    answerP.innerHTML += answersArray[6]; preAns.appendChild(answerP);
    imageDiv.removeEventListener("click", showAnswerSeven);
};

//Q8- Brendan Eich created the JavaScript programming language, Where is he from? (usa)
let showAnswerEight = () => {
    findImgClicked();

    if (index === 2) {
        user1display.innerHTML = '<span style="color:blue"> You got it </span>' + `${(answersArray[7])} is correct answer.
        click Next to continue`;
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
    }
    else if (index === 0 || index === 1) {
        user1display.innerHTML = '<span style="color:red"> Wrong Answer </span>' + `click Next to continue`;
        user1Score += 0; user1winMoney += 0;
    } else {
        return false;
    }
    //add Q&A to Q&A panel at the bottom
    questionP.innerHTML += questionsArray[7]; preQue.appendChild(questionP);
    answerP.innerHTML += answersArray[7]; preAns.appendChild(answerP);
    imageDiv.removeEventListener("click", showAnswerEight);
};

//Q9 - Niagara Falls is located in the United States and what other country? (canada)
let showAnswerNine = () => {
    findImgClicked();

    if (index === 1) {
        user1display.innerHTML = '<span style="color:blue"> You got it </span>' + `${(answersArray[8])} is correct answer.
        click Next to continue`;
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
    }
    else if (index === 0 || index === 2) {
        user1display.innerHTML = '<span style="color:red"> Wrong Answer </span>' + `click Next to continue`;
        user1Score += 0; user1winMoney += 0;
    } else {
        return false;
    }
    //add Q&A to Q&A panel at the bottom
    questionP.innerHTML += questionsArray[8]; preQue.appendChild(questionP);
    answerP.innerHTML += answersArray[8]; preAns.appendChild(answerP);
    imageDiv.removeEventListener("click", showAnswerNine);
};

//Q10- True champagne can only come from grapes grown in the Champagne region of what country? (France)
let showAnswerTen = () => {
    findImgClicked();

    //if any of the image clicked in last question(Q10), button value is show Result
    playBtn.value = "Show Results";

    if (index === 0) {
        user1display.innerHTML = '<span style="color:blue"> You got it </span>' + `${(answersArray[9])} is correct answer.`;
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
    }
    else if (index === 1 || index === 2) {
        user1display.innerHTML = '<span style="color:red"> Wrong Answer </span>';
        user1Score += 0; user1winMoney += 0;
    } else {
        return false;
    }
    //add Q&A to Q&A panel at the bottom
    questionP.innerHTML += questionsArray[9]; preQue.appendChild(questionP);
    answerP.innerHTML += answersArray[9]; preAns.appendChild(answerP);
    imageDiv.removeEventListener("click", showAnswerTen);
};

let reset = () => {
    location.reload();
};

/* Win Logic
 - At least 5 correct answers are needed to win the game.
 - if you have 5 or more correct answers (i.e you are winner), then you get $10 for each correct answer 
 - if all correct answers then, user gets $100 prize */

let winLogic = () => {

    if (user1Score === 10) {
        winner = true;
        if (winner) {
            user1display.innerHTML = '<span style="color:blue"> CONGRATULATIONS, </span>' + `${(user1Name.value)}!  
            You are the winner!!. You also won $100. <br> Do you want to play again? click 'Play New Game' button`;
        }
    } else if (user1Score >= 5) {
        winner = true;
        if (winner) {
            user1display.innerHTML = '<span style="color:blue"> CONGRATULATIONS, </span>' + `${(user1Name.value)}!  
            You are the winner!!. You also won $ ${user1winMoney}. <br> Do you want to play again? click 'Play New Game' button`;
        }
    } else {
        user1display.innerHTML = '<span style="color:red"> Sorry!! </span>' + `${(user1Name.value)},   
        You lost the game.`;
        if (winner === "false") {
            user1display.innerHTML = '<span style="color:red"> Sorry!, </span>' + `${(user1Name.value)}!!!
            You lost the game. To win the game, you need at least 5 correct answers. <br> Do you want to play again? click 'Play New Game' button`;
        }
    }
};

//Event listeners
playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);