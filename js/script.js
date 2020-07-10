console.log("js is working");

//Grab html elements
const playBtn = document.querySelector("#play-btn");
const nextBtn = document.querySelector("#next-btn");
const resetBtn = document.querySelector("#reset-btn");

let score = 0;
let winMoney = 0;
let player = null;

let questionsArray = ["question1", "question2", "question3", "question4", "question5"];
let answersArray = ["answer1", "answer2", "answer3", "answer4", "answer5"];

let play = () => {
    console.log("inside play method");
}
let nextQuestion = () => {
    console.log("inside next method");
    //declare variables
    let questionsArray = ["question1", "question2", "question3", "question4", "question5"];
    let answersArray = ["answer1", "answer2", "answer3", "answer4", "answer5"];
};

let reset = () => {
    console.log("inside reset method");
};

let calculateScore = () => {
    console.log("inside CALCULATE score method");
};


//event listeners
playBtn.addEventListener("click", play);
nextBtn.addEventListener("click", nextQuestion);
resetBtn.addEventListener("click", reset);



//function Expression 
//function play() {
//     console.log("inside play method");
// };