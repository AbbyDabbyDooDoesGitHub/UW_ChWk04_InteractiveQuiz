// alert('JS File is connected');

//function to get random item from an array
// function get_random (list) {
//     return list[Math.floor((Math.random()*list.length))]; 
// }

var q1_H = "Question 1 example question wow so question-y?";
var q1_A = ["answer1","answer2","answer3","answer4"];
var q2_H = "Question 2 example question wow so question-y?";
var q2_A = ["answer1","answer2","answer3","answer4"];
var q3_H = "Question 3 example question wow so question-y?";
var q3_A = ["answer1","answer2","answer3","answer4"];
var q4_H = "Question 4 example question wow so question-y?";
var q4_A = ["answer1","answer2","answer3","answer4"];
var q5_H = "Question 5 example question wow so question-y?";
var q5_A = ["answer1","answer2","answer3","answer4"];

var q_H1   = document.querySelector("#questionH1");
var q_Btn1 = document.querySelector("#questionBtn1");
var q_Btn2 = document.getElementById("#questionBtn2");
var q_Btn3 = document.getElementById("#questionBtn3");
var q_Btn4 = document.getElementById("#questionBtn4");

// FUNCTION TO SHUFFLE AN ARRAY
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;

}

function generateQuestion (q_question,q_answerArray) {
    shuffle(q_answerArray);
    q_H1.innerHTML   = q_question;
    q_Btn1.innerHTML = q_answerArray[0];
    q_Btn2.innerHTML = q_answerArray[1];
    q_Btn3.innerHTML = q_answerArray[2];
    q_Btn4.innerHTML = q_answerArray[3];
    
}

    // function startGame() {
    //     //hide the main page
    //     startEl.classList.add("hide");
    //     //show the quiz start screen
    //     answersEl.classList.remove("hide");
    //     quoteEl.classList.remove("hide");
    //     streakBarEl.classList.remove("hide");
    
    // };
    