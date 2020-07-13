console.log("js is working");

//Grab html elements
const playBtn = document.querySelector("#play-btn");
// const nextBtn = document.querySelector("#next-btn");
const resetBtn = document.querySelector("#reset-btn");

const changeMessage = document.querySelector("#transparentBox p");
let transparentDiv = document.querySelector(".transparentBox");

const user1Name = document.querySelector("#name-text");

const user1display = document.querySelector("#user1-name");
const preQue = document.querySelector(".questions p");
const preAns = document.querySelector(".questions");
const p_user1 = document.querySelector("#p_user1");
const p_user2 = document.querySelector("#p_user2");

//variable to create new div for image panel that will have multiple images
let imageDiv = document.createElement("div");
let questionP = document.createElement("p"); //variable to add question to Q&A pnael
let answerP = document.createElement("p"); //variable to add answer to Q&A pnael

let user1Score = 0;
let user2Score = 0;
let user1winMoney = 0;
let user2winMoney = 0;
let player = null;
let index;

let questionsArray = [
    "Where is Taj Mahal? Click on country flag",
    "What country is called `Land of Fire and Ice`?",
    "What country is made up of 3,000 islands?",
    "What country celebrates its New Year with people dancing underneath a dragon costume?",
    "What country is less than a hundred miles away from the U.S. state - FLORIDA?",
    "Luxury vehicles such as Ferrari, Maserati, and Lamborghini are manufactured in what country?",
    "Where is `Mount Everest`?",
    "Brendan Eich created the JavaScript programming language, Where is he from?",
    "Niagara Falls is located in the United States and what other country?",
    "True champagne can only come from grapes grown in the Champagne region of what country?"
];
let answersArray = ["India", "Iceland", "Japan", "China", "Cuba", "Italy", "Nepal", "USA", "Canada", "France"];

const gameEndMsg = "Game Ends! See you in another game!!"
resetBtn.disabled = true;

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
            p_user2.innerHTML = `Score - ${user2Score}/10`;
            resetBtn.disabled = false;

            showImagePanel();
        }
    } else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[0])) {
        changeMessage.innerHTML = questionsArray[1];
        showImagePanel();
    } else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[1])) {
        changeMessage.innerHTML = questionsArray[2];
        showImagePanel();
    }
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[2])) {
        changeMessage.innerHTML = questionsArray[3];
        showImagePanel();
    }
    //Q5-What country is less than a hundred miles away from the U.S. state - FLORIDA?
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[3])) {
        changeMessage.innerHTML = questionsArray[4];
        showImagePanel();
    }
    //Q6- Luxury vehicles such as Ferrari, Maserati, and Lamborghini are manufactured in what country? (italy)
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[4])) {
        changeMessage.innerHTML = questionsArray[5];
        showImagePanel();
    }
    //Q7- Where is `Mount Everest`? (nepal)
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[5])) {
        changeMessage.innerHTML = questionsArray[6];
        showImagePanel();
    }
    //Q8- Brendan Eich created the JavaScript programming language, Where is he from? (usa)
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[6])) {
        changeMessage.innerHTML = questionsArray[7];
        showImagePanel();
    }
    //Q9-Niagara Falls is located in the United States and what other country?
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[7])) {
        changeMessage.innerHTML = questionsArray[8];
        showImagePanel();
    }
    //10-True champagne can only come from grapes grown in the Champagne region of what country?
    else if ((playBtn.value === "Next") && (changeMessage.innerHTML === questionsArray[8])) {
        changeMessage.innerHTML = questionsArray[9];
        showImagePanel();
        playBtn.value = "Show Results";
    }
    else if ((playBtn.value === "Show Results")) {
        changeMessage.innerHTML = gameEndMsg;
        winLogic();
        playBtn.disabled = true;
    } else {
        return false;
    }

}
//show options for answer 
let showImagePanel = () => {
    insertDivsAndImages();
}

let insertDivsAndImages = () => {

    let imgArray = [];
    imgArray[0] = document.createElement("img");
    imgArray[1] = document.createElement("img");
    imgArray[2] = document.createElement("img");

    imgArray[0].classList.add("image");
    imgArray[1].classList.add("image");
    imgArray[2].classList.add("image");

    // let imageDiv = document.createElement("div");
    imageDiv.appendChild(imgArray[0]);
    imageDiv.appendChild(imgArray[1]);
    imageDiv.appendChild(imgArray[2]);

    //If Q1 then call showAnswerOne()
    console.log("ttttt " + changeMessage.innerHTML);
    console.log("tttt  " + questionsArray[0]);

    if (changeMessage.innerHTML === questionsArray[0]) {
        //addAnswer1_ImgSources();                  //Add Q1 images to imgArray indexs
        imgArray[0].src = "css/india.png";
        imgArray[1].src = "css/bolivia.png";
        imgArray[2].src = "css/ghana.png";

        transparentDiv.appendChild(imageDiv);
        imageDiv.addEventListener("click", showAnswerOne);
    }

    //Q2 then call showAnswerTwo()
    else if (changeMessage.innerHTML === questionsArray[1]) {
        console.log(" Q2 imgArray[0].src " + imgArray[0].src);

        //addAnswer2_ImgSources; //Add Q2 images to imgArray indexs

        let getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/france.png";
        getImgArray[1].src = "css/iceland.png";
        getImgArray[2].src = "css/romania.jpeg";
        imageDiv.addEventListener("click", showAnswerTwo);
    }

    //Q3 then call showAnswerThree()
    else if (changeMessage.innerHTML === questionsArray[2]) {
        //addAnswer3_ImgSources; //add different images to imgArray indexs
        let getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/canada.png";
        getImgArray[1].src = "css/brazil.png";
        getImgArray[2].src = "css/japan.png";
        imageDiv.addEventListener("click", showAnswerThree);
    }
    //Q4  - What country celebrates its New Year with people dancing underneath a dragon costume? (china)
    else if (changeMessage.innerHTML === questionsArray[3]) {
        //addAnswer4_ImgSources //add different images to imgArray indexs
        let getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/southKorea.png";
        getImgArray[1].src = "css/china.png";
        getImgArray[2].src = "css/thailand.png";
        imageDiv.addEventListener("click", showAnswerFour);
    }
    //Q5-What country is less than a hundred miles away from the U.S. state - FLORIDA?
    else if (changeMessage.innerHTML === questionsArray[4]) {
        //addAnswer4_ImgSources //add different images to imgArray indexs
        let getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/jamaica.png";
        getImgArray[1].src = "css/mexico.png";
        getImgArray[2].src = "css/cuba.png";
        imageDiv.addEventListener("click", showAnswerFive);
    }
    //Q6- Luxury vehicles such as Ferrari, Maserati, and Lamborghini are manufactured in what country? (italy)
    else if (changeMessage.innerHTML === questionsArray[5]) {
        //addAnswer4_ImgSources //add different images to imgArray indexs
        let getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/italy.png";
        getImgArray[1].src = "css/germany.png";
        getImgArray[2].src = "css/usa.png";
        imageDiv.addEventListener("click", showAnswerSix);
    }
    //Q7- Where is `Mount Everest`? (nepal)
    else if (changeMessage.innerHTML === questionsArray[6]) {
        //addAnswer4_ImgSources //add different images to imgArray indexs
        let getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/china.png";
        getImgArray[1].src = "css/nepal.png";
        getImgArray[2].src = "css/india.png";
        imageDiv.addEventListener("click", showAnswerSeven);
    }
    //Q8- Brendan Eich created the JavaScript programming language, Where is he from? (usa)
    else if (changeMessage.innerHTML === questionsArray[7]) {
        //addAnswer4_ImgSources //add different images to imgArray indexs
        let getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/germany.png";
        getImgArray[1].src = "css/canada.png";
        getImgArray[2].src = "css/usa.png";
        imageDiv.addEventListener("click", showAnswerEight);
    }
    //Q9 - Niagara Falls is located in the United States and what other country? (Canada)
    else if (changeMessage.innerHTML === questionsArray[8]) {
        let getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/brazil.png";
        getImgArray[1].src = "css/canada.png";
        getImgArray[2].src = "css/mexico.png";
        imageDiv.addEventListener("click", showAnswerNine);
    }
    //10- True champagne can only come from grapes grown in the Champagne region of what country?
    else if (changeMessage.innerHTML === questionsArray[9]) {
        let getImgArray = document.querySelectorAll(".image");
        getImgArray[0].src = "css/france.png";
        getImgArray[1].src = "css/italy.png";
        getImgArray[2].src = "css/germany.png";
        imageDiv.addEventListener("click", showAnswerTen);
    }
    else {
        return false;
    }

}//end insertDivsAndImages function


//Finds which image was clicked
let findImgClicked = () => {
    let transparentImgDiv = document.querySelectorAll(".transparentBox img");
    let tranImgArray = Array.from(transparentImgDiv);

    //Find the index of the image from ImgArray ==> that the user clicks
    index = tranImgArray.findIndex(function (image) {
        //event.target return which image was clicked
        console.log("return which image clicked === event.target " + event.target);
        return image === event.target;
    });
}

//Q1 - Where is Taj Mahal? Click on country flag (india)
let showAnswerOne = () => {
    //Find which image was clicked
    findImgClicked();

    console.log("Index is " + index);
    if (index === 0) { //india flag clicked
        alert(`You got it - ${answersArray[index]} is correct answer`);
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;

        imageDiv.removeEventListener("click", showAnswerOne);

        //add Q&A to panel
        questionP.innerHTML += questionsArray[0];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[0];
        preAns.appendChild(answerP);

        console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    }
    else if (index === 1 || index === 2) {
        alert("Wrong Answer");
        user1Score += 0; user1winMoney += 0;

        imageDiv.removeEventListener("click", showAnswerOne);

        //add Q&A to panel
        questionP.innerHTML += questionsArray[0];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[0]; //adding answer to Q&A panel
        preAns.appendChild(answerP); // adds imageDiv to transparent div
        console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);

    } else {
        return false;
    }
};

//Q2 - What country is called `Land of Fire and Ice`?
let showAnswerTwo = () => {
    //Find which image was clicked
    findImgClicked();
    console.log("index is " + index);

    if (index === 1) {
        alert(`You got it - ${answersArray[index]} is correct answer`);
        user1Score += 1; user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score} /10`;
        imageDiv.removeEventListener("click", showAnswerTwo);

        //adding QUESTIONS & answers to Q&A panel
        questionP.innerHTML += questionsArray[index];
        preQue.appendChild(questionP);

        answerP.innerHTML += answersArray[index];
        preAns.appendChild(answerP); // adds imageDiv to transparent div

        //console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    }
    else if (index === 0 || index === 2) {
        alert("Wrong Answer");
        user1Score += 0; user1winMoney += 0;

        //adding correct answer to Q&A panel at the bpttom, although worng answer
        imageDiv.removeEventListener("click", showAnswerTwo);
        questionP.innerHTML += questionsArray[1];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[1]; //adding answer to Q&A panel
        preAns.appendChild(answerP); // adds imageDiv to transparent div
        //console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    } else {
        return false;
    }
};

//Q3 - What country is made up of 3,000 islands? (Japan)
let showAnswerThree = () => {
    //alert(" inside showAnswerThree function");

    //Find which image was clicked
    findImgClicked();
    console.log("Ids is " + index);

    if (index === 2) {
        alert(`You got it - ${answersArray[index]} is correct answer`);
        user1Score += 1;
        user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
        imageDiv.removeEventListener("click", showAnswerThree);

        questionP.innerHTML += questionsArray[index];
        preQue.appendChild(questionP);
        //adding answer to Q&A panel
        answerP.innerHTML += answersArray[index];
        preAns.appendChild(answerP); // adds imageDiv to transparent div

        console.log(" user1 score is  " + user1Score);
        console.log(" user1 winning amount is  " + user1winMoney);
    }
    else if (index === 0 || index === 1) {
        alert("Wrong Answer");
        user1Score += 0; user1winMoney += 0;

        //adding correct answer to Q&A panel at the bpttom, although worng answer
        imageDiv.removeEventListener("click", showAnswerThree);
        questionP.innerHTML += questionsArray[2];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[2]; //adding answer to Q&A panel
        preAns.appendChild(answerP); // adds imageDiv to transparent div
        console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    } else {
        return false;
    }
};

//Q4 - What country celebrates its New Year with people dancing underneath a dragon costume (China)
let showAnswerFour = () => {
    //alert(" inside showAnswerThree function");

    //Find which image was clicked
    findImgClicked();
    console.log("Ids is " + index);

    if (index === 1) {
        alert(`You got it - ${answersArray[3]} is correct answer`);
        user1Score += 1;
        user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
        imageDiv.removeEventListener("click", showAnswerFour);

        questionP.innerHTML += questionsArray[3];
        preQue.appendChild(questionP);
        //adding answer to Q&A panel
        answerP.innerHTML += answersArray[3];
        preAns.appendChild(answerP); // adds imageDiv to transparent div

        console.log(" user1 score is  " + user1Score);
        console.log(" user1 winning amount is  " + user1winMoney);
    }
    else if (index === 0 || index === 2) {
        alert("Wrong Answer");
        user1Score += 0; user1winMoney += 0;

        //adding correct answer to Q&A panel at the bpttom, although worng answer
        imageDiv.removeEventListener("click", showAnswerFour);
        questionP.innerHTML += questionsArray[3];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[3]; //adding answer to Q&A panel
        preAns.appendChild(answerP); // adds imageDiv to transparent div
        console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    } else {
        return false;
    }
};
//Q5 - What country is less than a hundred miles away from the U.S. state - FLORIDA? (CUBA)
let showAnswerFive = () => {

    //Find which image was clicked
    findImgClicked();
    console.log("Index is " + index);

    if (index === 2) {
        alert(`You got it - ${answersArray[4]} is correct answer`);
        user1Score += 1;
        user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
        imageDiv.removeEventListener("click", showAnswerFive);

        questionP.innerHTML += questionsArray[4];
        preQue.appendChild(questionP);
        //adding answer to Q&A panel
        answerP.innerHTML += answersArray[4];
        preAns.appendChild(answerP); // adds imageDiv to transparent div

        console.log(" user1 score is  " + user1Score);
        console.log(" user1 winning amount is  " + user1winMoney);
    }
    else if (index === 0 || index === 1) {
        alert("Wrong Answer");
        user1Score += 0; user1winMoney += 0;

        //adding correct answer to Q&A panel at the bpttom, although worng answer
        imageDiv.removeEventListener("click", showAnswerFive);
        questionP.innerHTML += questionsArray[4];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[4]; //adding answer to Q&A panel
        preAns.appendChild(answerP); // adds imageDiv to transparent div
        console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    } else {
        return false;
    }
};

//Q6- Luxury vehicles such as Ferrari, Maserati, and Lamborghini are manufactured in what country? (italy)
let showAnswerSix = () => {

    //Find which image was clicked
    findImgClicked();
    console.log("Index is " + index);

    if (index === 0) {
        alert(`You got it - ${answersArray[5]} is correct answer`);
        user1Score += 1;
        user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
        imageDiv.removeEventListener("click", showAnswerSix);

        questionP.innerHTML += questionsArray[5];
        preQue.appendChild(questionP);
        //adding answer to Q&A panel
        answerP.innerHTML += answersArray[5];
        preAns.appendChild(answerP); // adds imageDiv to transparent div

        console.log(" user1 score is  " + user1Score);
        console.log(" user1 winning amount is  " + user1winMoney);
    }
    else if (index === 1 || index === 2) {
        alert("Wrong Answer");
        user1Score += 0; user1winMoney += 0;

        //adding correct answer to Q&A panel at the bpttom, although worng answer
        imageDiv.removeEventListener("click", showAnswerSix);
        questionP.innerHTML += questionsArray[5];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[5]; //adding answer to Q&A panel
        preAns.appendChild(answerP); // adds imageDiv to transparent div
        console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    } else {
        return false;
    }
};

//Q7- Where is `Mount Everest`? (nepal)
let showAnswerSeven = () => {

    //Find which image was clicked
    findImgClicked();
    console.log("Index is " + index);

    if (index === 1) {
        alert(`You got it - ${answersArray[6]} is correct answer`);
        user1Score += 1;
        user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
        imageDiv.removeEventListener("click", showAnswerSeven);

        questionP.innerHTML += questionsArray[6];
        preQue.appendChild(questionP);
        //adding answer to Q&A panel
        answerP.innerHTML += answersArray[6];
        preAns.appendChild(answerP); // adds imageDiv to transparent div

        console.log(" user1 score is  " + user1Score);
        console.log(" user1 winning amount is  " + user1winMoney);
    }
    else if (index === 0 || index === 2) {
        alert("Wrong Answer");
        user1Score += 0; user1winMoney += 0;

        //adding correct answer to Q&A panel at the bpttom, although worng answer
        imageDiv.removeEventListener("click", showAnswerSeven);
        questionP.innerHTML += questionsArray[6];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[6]; //adding answer to Q&A panel
        preAns.appendChild(answerP); // adds imageDiv to transparent div
        console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    } else {
        return false;
    }
};

//Q8- Where is `Mount Everest`? (nepal)
let showAnswerEight = () => {

    //Find which image was clicked
    findImgClicked();
    console.log("Index is " + index);

    if (index === 2) {
        alert(`You got it - ${answersArray[7]} is correct answer`);
        user1Score += 1;
        user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
        imageDiv.removeEventListener("click", showAnswerEight);

        questionP.innerHTML += questionsArray[7];
        preQue.appendChild(questionP);
        //adding answer to Q&A panel
        answerP.innerHTML += answersArray[7];
        preAns.appendChild(answerP); // adds imageDiv to transparent div

        console.log(" user1 score is  " + user1Score);
        console.log(" user1 winning amount is  " + user1winMoney);
    }
    else if (index === 0 || index === 1) {
        alert("Wrong Answer");
        user1Score += 0; user1winMoney += 0;

        //adding correct answer to Q&A panel at the bpttom, although worng answer
        imageDiv.removeEventListener("click", showAnswerEight);
        questionP.innerHTML += questionsArray[7];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[7]; //adding answer to Q&A panel
        preAns.appendChild(answerP); // adds imageDiv to transparent div
        console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    } else {
        return false;
    }
};

//Q9 - Niagara Falls is located in the United States and what other country? (canada)
let showAnswerNine = () => {

    //Find which image was clicked
    findImgClicked();
    console.log("Index is " + index);

    if (index === 1) {
        alert(`You got it - ${answersArray[8]} is correct answer`);
        user1Score += 1;
        user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
        imageDiv.removeEventListener("click", showAnswerNine);

        questionP.innerHTML += questionsArray[8];
        preQue.appendChild(questionP);
        //adding answer to Q&A panel
        answerP.innerHTML += answersArray[8];
        preAns.appendChild(answerP); // adds imageDiv to transparent div

        console.log(" user1 score is  " + user1Score);
        console.log(" user1 winning amount is  " + user1winMoney);
    }
    else if (index === 0 || index === 2) {
        alert("Wrong Answer");
        user1Score += 0; user1winMoney += 0;

        //adding correct answer to Q&A panel at the bpttom, although worng answer
        imageDiv.removeEventListener("click", showAnswerNine);
        questionP.innerHTML += questionsArray[8];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[8]; //adding answer to Q&A panel
        preAns.appendChild(answerP); // adds imageDiv to transparent div
        console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    } else {
        return false;
    }
};

//Q10- True champagne can only come from grapes grown in the Champagne region of what country? (France)
let showAnswerTen = () => {

    //Find which image was clicked
    findImgClicked();
    console.log("Index is " + index);

    if (index === 0) {
        alert(`You got it - ${answersArray[9]} is correct answer`);
        user1Score += 1;
        user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
        imageDiv.removeEventListener("click", showAnswerTen);

        questionP.innerHTML += questionsArray[9];
        preQue.appendChild(questionP);
        //adding answer to Q&A panel
        answerP.innerHTML += answersArray[9];
        preAns.appendChild(answerP); // adds imageDiv to transparent div

        console.log(" user1 score is  " + user1Score);
        console.log(" user1 winning amount is  " + user1winMoney);
    }
    else if (index === 1 || index === 2 || index === 3) {
        alert("Wrong Answer");
        user1Score += 0; user1winMoney += 0;

        //adding correct answer to Q&A panel at the bpttom, although worng answer
        imageDiv.removeEventListener("click", showAnswerTen);
        questionP.innerHTML += questionsArray[9];
        preQue.appendChild(questionP);
        answerP.innerHTML += answersArray[9]; //adding answer to Q&A panel
        preAns.appendChild(answerP); // adds imageDiv to transparent div
        console.log(" user1 score is  " + user1Score); console.log(" user1 score is  " + user1winMoney);
    } else {
        return false;
    }
};


let reset = () => {
    console.log("inside reset method");
    location.reload();

};

//Win Logic
//At least three correct answers are needed to win the game.
//if you have 3 or more correct answers (i.e you are winner), then you get $10 for each correct answer 
//if all correct answers then, users also gets $100 prize
let winLogic = () => {
    console.log("inside WIN LOGIC method");
    if (user1Score === 10) {
        user1display.innerHTML = '<span style="color:blue"> CONGRATULATIONS </span>' + `${(user1Name.value)}!!! You are the winner!! You also won $100 `;
        alert(`CONGRATULATIONS!!!, 
        You are the winner!!. your score is ${user1Score}. 
        You also won $100`);
        alert("Do you want to play again?.. click `Play New Game' button");
    }
    else if (user1Score >= 3) {
        user1display.innerHTML = '<span style="color:blue"> CONGRATULATIONS </span>' + `${(user1Name.value)}!!!   
        You are the winner!!   You also won $ ${user1winMoney} `;

        alert(`To win the game, you need at least 3 correct answers.
            CONGRATULATIONS!!!, You are the winner!!.your score is ${user1Score}
            You also won $ ${user1winMoney}`);
        alert("Do you want to play again?.. click `Play New Game' button");
    } else {
        user1display.innerHTML = '<span style="color:red"> Sorry!! </span>' + `${(user1Name.value)},   
        You lost the game.`;
        alert(`Sorry, you lost the game. 
        To win the game, you need at least 3 correct answers.your score is ${user1Score}`);
        alert("Do you want to play again?.. click `Play New Game' button");
    }

};


//event listeners
playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);

