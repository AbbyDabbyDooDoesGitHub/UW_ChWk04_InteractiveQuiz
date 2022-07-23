// alert('JS File is connected');

//function to get random item from an array
// function get_random (list) {
//     return list[Math.floor((Math.random()*list.length))]; 
// }

var qNum = 0;

var q1_H    = "Question 1 example question wow so question-y?";
var q1_A    = ["answer1","answer2","answer3","answer4"];
var q1_true = q1_A[0];
var q2_H    = "Question 2 example question wow so question-y?";
var q2_A    = ["answer1","answer2","answer3","answer4"];
var q2_true = q2_A[0];
var q3_H    = "Question 3 example question wow so question-y?";
var q3_A    = ["answer1","answer2","answer3","answer4"];
var q3_true = q3_A[0];
var q4_H    = "Question 4 example question wow so question-y?";
var q4_A    = ["answer1","answer2","answer3","answer4"];
var q4_true = q4_A[0];
var q5_H    = "Question 5 example question wow so question-y?";
var q5_A    = ["answer1","answer2","answer3","answer4"];
var q5_true = q5_A[0];

var sect_start   = document.querySelector(".start");
var sect_q       = document.querySelector(".question");
var sect_sucFail = document.querySelector(".sucFail");
var sect_end     = document.querySelector(".endscreen");

var start_Btn = document.querySelector("#startBtn");
var q_H1      = document.querySelector("#questionH1");
var q_Btn1    = document.querySelector("#questionBtn1");
var q_Btn2    = document.getElementById("#questionBtn2");
var q_Btn3    = document.getElementById("#questionBtn3");
var q_Btn4    = document.getElementById("#questionBtn4");
var q_SucFail = document.getElementById("#successFailureText");

var q_Btn1Var = "";
var q_Btn2Var = "";
var q_Btn3Var = "";
var q_Btn4Var = "";

start_Btn.addEventListener("click", startQuiz);

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

    var q_Btn1Var = q_answerArray[0];
    var q_Btn2Var = q_answerArray[1];
    var q_Btn3Var = q_answerArray[2];
    var q_Btn4Var = q_answerArray[3];

    qNum = ++;

    q_Btn1.addEventListener("click", nextQ(q_Btn1Var));
    q_Btn2.addEventListener("click", nextQ(q_Btn2Var));
    q_Btn3.addEventListener("click", nextQ(q_Btn3Var));
    q_Btn4.addEventListener("click", nextQ(q_Btn4Var));
    
}

function startQuiz() {
    console.log("start quiz btn clicked");

    // hide the start section
    sect_start.classList.add("d-none");

    // change question to q1
    generateQuestion(q1_H,q1_A);

    // show the question section
    sect_q.classList.remove("d-none");
    
};

function nextQ(answerBtn) {
    if (qNum=1) {
        verifyAnswer(answerBtn, q1_true);
        generateQuestion(q2_H,q2_A);

    } else if (qNum=2) {
        verifyAnswer(answerBtn, q2_true);
        generateQuestion(q3_H,q3_A);

    } else if (qNum=3) {
        verifyAnswer(answerBtn, q3_true);
        generateQuestion(q4_H,q4_A);

    } else if (qNum=4) {
        verifyAnswer(answerBtn, q4_true);
        generateQuestion(q5_H,q5_A);

    } else if (qNum=5) {
        verifyAnswer(answerBtn, q5_true);
        showEndscreen();

    } else {
        console.log("ERROR: qNum is " + qNum);
    }

}

function verifyAnswer (answerBtn,qN_true) {
    if (answerBtn===qN_true) {
        q_SucFail.innerHTML = "Correct!";
        sect_sucFail.classList.add("d-none");

        sect_q.classList.remove("d-none");
        setTimeout(() => {
            const const_sucFail = sect_sucFail;
            const_sucFail.classList.add("d-none"); }, 5000); // 👈️ time in milliseconds

    } else {
        q_SucFail.innerHTML = "Wrong Answer! Time Penalty Applied";
        sect_sucFail.classList.add("d-none");

        sect_q.classList.remove("d-none");
        setTimeout(() => {
            const const_sucFail = sect_sucFail;
            const_sucFail.classList.add("d-none"); }, 5000); // 👈️ time in milliseconds
        
        applyTimePenalty();

    }

}

function applyTimePenalty () {

}

function showEndscreen () {

}

// function setTimeout(() => {
//     const const_sucFail = sect_sucFail;
//     const_sucFail.classList.add("d-none"); }, 5000); // 👈️ time in milliseconds
    