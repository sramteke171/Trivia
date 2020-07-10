console.log("js is working");

class Trivia {

    constructor() {
        this.score = 0;
        this.winMoney = 0;
        this.player = null;

        //Grab html elements
        const playBtn = document.querySelector("#play-btn");
        const nextBtn = document.querySelector("#next-btn");
        const resetBtn = document.querySelector("#reset-btn");
        // playBtn.addEventListener("click", this.play());
        // nextBtn.addEventListener("click", this.nextQuestion());
        // resetBtn.addEventListener("click", this.reset());
        //this.addEventListener("click", this);

    };

    play() {
        console.log("inside play method");
    };
    nextQuestion() {
        console.log("inside next method");
        //declare variables
        let questionsArray = ["question1", "question2", "question3", "question4", "question5"];
        let answersArray = ["answer1", "answer2", "answer3", "answer4", "answer5"];
    };
    calculateScore() {
        console.log("inside CALCULATE score method");
    };
    reset() {
        console.log("inside reset method");
    };

    //event listeners
    addEventListeners() {
        //Grab html elements
        // const playBtn = document.querySelector("#play-btn");
        // const nextBtn = document.querySelector("#next-btn");
        // const resetBtn = document.querySelector("#reset-btn");
        // playBtn.addEventListener("click", this.play());
        // nextBtn.addEventListener("click", this.nextQuestion());
        // resetBtn.addEventListener("click", this.reset());
    };

}

let a = new Trivia();
console.log(a);

// //Grab html elements
//const playBtn = document.querySelector("#play-btn");
document.querySelector("#play-btn").onclick = a.play();

// const nextBtn = document.querySelector("#next-btn");
// const resetBtn = document.querySelector("#reset-btn");
//console.log("playBtn " + playBtn);
//a.addEventListeners();

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return "I have a " + this.carname;
//     }
//   }

//   mycar = new Car("Ford");
//   document.getElementById("demo").innerHTML = mycar.present();



// Class myClass

// constructor(){
//      //Whatever this is supposed to do.
//      //You can also add events listener within the class this way :
//      this.addEventListener("mousedown",this);
// }

// mouseDownEvent(e)(){
//      //Some action related to the mouse down event (e)
//      console.log(e.target);
// }
// mouseMoveEvent(e)(){
//      //Some action related to the mouse move event (e)
// }
// mouseUpEvent(e)(){
//      //Some action related to the mouse up event (e)
// }

// handleEvent(e) {
//     switch(e.type) {
//         case "mousedown":
//             this.mouseDownEvent(e);
//         break;
//         case "mousemove":
//             this.mouseMoveEvent(e);
//         break;
//         case "mouseup":
//             this.mouseUpEvent(e);
//         break;
//     }
// }