console.log("js is working");

//Grab html elements
const playBtn = document.querySelector("#play-btn");
const nextBtn = document.querySelector("#next-btn");
const resetBtn = document.querySelector("#reset-btn");

const changeMessage = document.querySelector("#transparentBox p");
let transparentDiv = document.querySelector(".transparentBox");

const user1Name = document.querySelector("#name-text");

const user1display = document.querySelector("#user1-name");
const preQue = document.querySelector(".questions p");
const p_user1 = document.querySelector("#p_user1");
const p_user2 = document.querySelector("#p_user2");

//variable to create new div for image panel that will have multiple images
let imageDiv = document.createElement("div");


let user1Score = 0;
let user2Score = 0;
let user1winMoney = 0;
let user2winMoney = 0;
let player = null;

let questionsArray = [
    "Where is Taj Mahal? Click on country flag",
    "question2",
    "question3",
    "question4",
    "question5"];
let answersArray = ["India", "answer2", "answer3", "answer4", "answer5"];
//let picArray = [..css / india.jpeg, "answer2", "answer3", "answer4", "answer5"];

//image array for Question1 images
let imgArray = [];

imgArray[0] = new Image();
//imgArray[0].src = "css/india.jpeg";

imgArray[1] = new Image();
//imgArray[1].src = "css/france.png";

imgArray[2] = new Image();
//imgArray[2].src = "css/italy.png";

// imgArray[3] = new Image();
// //imgArray[3].src = "css/romania.jpeg";

// imgArray[4] = new Image();
// //imgArray[4].src = 'css/belgium.png';

// let imgArray = ["css/india.jpeg", "css/france.png", "css/italy.png", css/romania.jpeg", "css/belgium.png"];
// imgArray = new Image();


const gameEndMsg = "Game Ends! See you in another game!!"

let play = () => {
    console.log("inside play method");
    if (playBtn.value === "PLAY") {
        if (user1Name.value === "") {
            alert("please enter name");
        } else {
            changeMessage.innerHTML = questionsArray[0];
            // imagePane.innerHTML = imgArray[0].value;
            playBtn.value = "Next";
            user1Name.remove();
            user1display.innerHTML = `Welcome ${(user1Name.value)}!`;
            p_user1.innerHTML = `Score - ${user1Score}/10`;
            p_user2.innerHTML = `Score - ${user2Score}/10`;
            preQue.innerHTML = changeMessage.innerHTML;

            showImagePanel();
            //insertImages();

        }
    } else if (playBtn.value === "Next") {
        changeMessage.innerHTML = questionsArray[1];
        playBtn.value = "EndGame";
    } else if ((playBtn.value === "EndGame")) {
        changeMessage.innerHTML = gameEndMsg;
        playBtn.remove();
    } else {
        return false;
    }
    //  else if (playBtn.value === "Next") {
    //     changeMessage.innerHTML = questionsArray[2];
    // } else if (playBtn.value === "Next") {
    //     changeMessage.innerHTML = questionsArray[3];
    // } else if (playBtn.value === "Next") {
    //     changeMessage.innerHTML = questionsArray[4];
    //     playBtn.remove();
    //     changeMessage.innerHTML = gameEndMsg;
    // }

}
//show options for answer 
let showImagePanel = () => {

    // imgArray[0].onload = () => {
    //     imageDiv.innerHTML += '<img src="' + imgArray[0].src + '" />';
    //     console.log("inside onLoad function" + imageDiv.innerHTML);
    // };
    // imgArray[0].src = "css/india.jpeg";

    // imgArray[1].onload = () => {
    //     imageDiv.innerHTML += '<img src="' + imgArray[1].src + '" />';
    // };
    // imgArray[1].src = "css/france.png";


    // imgArray[2].onload = () => {
    //     imageDiv.innerHTML += '<img src="' + imgArray[2].src + '" />';
    // };
    // imgArray[2].src = "css/italy.png";



    // imgArray[3].onload = () => {
    //     imageDiv.innerHTML += '<img src="' + imgArray[3].src + '" />';
    // };
    // imgArray[3].src = "css/romania.jpeg";

    // imgArray[4].onload = () => {
    //     imageDiv.innerHTML += '<img src="' + imgArray[4].src + '" />';
    // };
    // imgArray[4].src = "css/belgium.png";

    //imageDiv.addEventListener("click", clickIndia);
    // imageDiv.imgArray[0].src.addEventListener("click", clickIndia);
    //imgArray[0].addEventListener("onload", clickIndia);


    //let imageDiv = document.querySelector(".transparentBox");
    //     imgArray.onload = (img) => {
    //         for (let i = 0; i < img.length; i++) {
    //             imageDiv.innerHTML += '<img src="' + img.src[i] + '" />';
    //             console.log("inside onLoad function" + imageDiv.innerHTML);
    //         }
    //     };
    // };

    insertDivsAndImages();

}

let insertDivsAndImages = () => {
    //console.log("inside insertDivsAndImages");

    imgArray[0].onload = () => {
        imageDiv.innerHTML += '<img src="' + imgArray[0].src + '" />';
        console.log("inside onLoad 0 function --image div " + imageDiv.innerHTML);

    };
    // imgArray[0].src = "css/india.jpeg";

    imgArray[1].onload = () => {
        imageDiv.innerHTML += '<img src="' + imgArray[1].src + '" />';
    };
    // imgArray[1].src = "css/france.png";


    imgArray[2].onload = () => {
        imageDiv.innerHTML += '<img src="' + imgArray[2].src + '" />';
    };
    // imgArray[2].src = "css/italy.png";
    addAnswer1_ImgSources();
    transparentDiv.appendChild(imageDiv); // adds imageDiv to transparent div
    console.log("inside onLoad function transparentDiv" + transparentDiv.innerHTML);
    imageDiv.addEventListener("click", clickIndia);

}//end insertDivsAndImages function

let addAnswer1_ImgSources = () => {
    imgArray[0].src = "css/india.jpeg";
    imgArray[1].src = "css/france.png";
    imgArray[2].src = "css/italy.png";
}

let clickIndia = () => {
    //alert(" inside clickIndia function");

    let transparentImgDiv = document.querySelectorAll(".transparentBox img");
    let tranImgArray = Array.from(transparentImgDiv);
    //Find the index of the image from squares Array ==> that matches the square that the user clicks

    let ids = tranImgArray.findIndex(function (image) {
        //event.target return which image was clicked
        console.log("return which image clicked === event.target " + event.target);
        return image === event.target;
    });

    console.log("Ids is " + ids);

    if (ids === 0) { //india flag clicked
        alert("you got it - India is correct answer");
        user1Score += 1;
        user1winMoney += 10;
        p_user1.innerHTML = `Score - ${user1Score}/10`;
        imageDiv.removeEventListener("click", clickIndia);
        //preQue.innerHTML = preQue.innerHTML.appendChild(answersArray[0]);


        console.log(" user1 score is  " + user1Score);
        console.log(" user1 score is  " + user1winMoney);
    }
    else if (ids === 1) {
        alert("Wrong Anser - France");
        user1Score += 0;
        user1winMoney += 0;
        console.log(" user1 score is  " + user1Score);
        console.log(" user1 score is  " + user1winMoney);
    } else if (ids === 2) {
        alert("Wrong Anser - Italy");
        user1Score += 0;
        user1winMoney += 0;
        console.log(" user1 score is  " + user1Score);
        console.log(" user1 score is  " + user1winMoney);
    } else {
        return false;
    }
};

//imageDiv.imgArray[0].src.addEventListener("click", clickIndia);
// imageDiv.addEventListener("click", clickIndia);

// let clickindia = () => {
//     alert("india clicked");
//     this.user1Score += 1;
//     this.user1winMoney += 1;
//     console.log(" user1 score is  " + user1Score);
//     console.log(" user1 score is  " + user1winMoney);
// }


let nextQuestion = () => {
    console.log("inside next method");

};

let reset = () => {
    console.log("inside reset method");
    location.reload();

};

let calculateScore = () => {
    console.log("inside CALCULATE score method");
};


//event listeners
playBtn.addEventListener("click", play);
// nextBtn.addEventListener("click", nextQuestion);
resetBtn.addEventListener("click", reset);

// imgArray[0].addEventListener("click", clickIndia);

//function Expression 
//function play() {
//     console.log("inside play method");
// };