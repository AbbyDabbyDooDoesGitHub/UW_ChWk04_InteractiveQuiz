// alert('JS File is connected');

//function to get random item from an array
// function get_random (list) {
//     return list[Math.floor((Math.random()*list.length))]; 
// }

var qNum = 0;

var q1_H    = "Question 1 example question wow so question-y?";
var q1_A    = ["answer1","answer2","answer3","answer4"];
var q1_true = "answer1";
var q2_H    = "Question 2 example question wow so question-y?";
var q2_A    = ["answer1","answer2","answer3","answer4"];
var q2_true = "answer1";
var q3_H    = "Question 3 example question wow so question-y?";
var q3_A    = ["answer1","answer2","answer3","answer4"];
var q3_true = "answer1";
var q4_H    = "Question 4 example question wow so question-y?";
var q4_A    = ["answer1","answer2","answer3","answer4"];
var q4_true = "answer1";
var q5_H    = "Question 5 example question wow so question-y?";
var q5_A    = ["answer1","answer2","answer3","answer4"];
var q5_true = "answer1";

var sect_start   = document.querySelector(".start");
// var sect_q       = document.querySelector(".question");
var sect_sucFail = document.querySelector(".sucFail");
var sect_end     = document.querySelector(".endscreen");

var start_Btn = document.getElementById('startBtn');
// var start_Btn = document.querySelector("#startBtn");
var q_H1      = document.getElementById("questionH1");

var q_Block   = document.getElementById("questionBlock");

// var q_List    = document.getElementById("#qList");
var q_Btn1    = document.getElementById("questionBtn1");
var q_Btn2    = document.getElementById("questionBtn2");
var q_Btn3    = document.getElementById("questionBtn3");
var q_Btn4    = document.getElementById("questionBtn4");
var q_SucFail = document.getElementById("successFailureText");

var q_Btn1Var = "";
var q_Btn2Var = "";
var q_Btn3Var = "";
var q_Btn4Var = "";



start_Btn.addEventListener("click", function(){startQuiz();});

q_Btn1.addEventListener("click", function(){nextQ(q_Btn1Var);});
q_Btn2.addEventListener("click", function(){nextQ(q_Btn2Var);});
q_Btn3.addEventListener("click", function(){nextQ(q_Btn3Var);});
q_Btn4.addEventListener("click", function(){nextQ(q_Btn4Var);});


function reveal (section) {
    console.log("ran reveal()");
    section.style.display = "block";
}

function hide (section) {
    console.log("ran hide()");
    section.style.display = "none";
}

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

    console.log("Array:" + q1_A + "   A is " + q1_true);

    q_H1.innerHTML   = q_question;

    q_Btn1.innerHTML = q_answerArray[0];
    q_Btn2.innerHTML = q_answerArray[1];
    q_Btn3.innerHTML = q_answerArray[2];
    q_Btn4.innerHTML = q_answerArray[3];

    q_Btn1Var = q_answerArray[0];
    q_Btn2Var = q_answerArray[1];
    q_Btn3Var = q_answerArray[2];
    q_Btn4Var = q_answerArray[3];

    // console.log("q_Btn1Var is "+q_Btn1Var);
    // console.log("q_Btn2Var is "+q_Btn2Var);
    // console.log("q_Btn3Var is "+q_Btn3Var);
    // console.log("q_Btn4Var is "+q_Btn4Var);

    console.log("qNum is "+qNum);

    var tempQNum = qNum + 1;
    qNum = tempQNum;
    
    console.log("qNum is "+qNum);

}

function startQuiz() {
    // console.log("start quiz btn clicked");
    // console.log("Array:" + q1_A + "   A is " + q1_true);

    hide(sect_start);
    reveal(q_Block);

    // change question to q1
    generateQuestion(q1_H,q1_A);
    
};

function nextQ(answerBtn) {
    if (qNum===1) {
        verifyAnswer(answerBtn, q1_true);
        generateQuestion(q2_H,q2_A);

    } else if (qNum===2) {
        verifyAnswer(answerBtn, q2_true);
        generateQuestion(q3_H,q3_A);

    } else if (qNum===3) {
        verifyAnswer(answerBtn, q3_true);
        generateQuestion(q4_H,q4_A);

    } else if (qNum===4) {
        verifyAnswer(answerBtn, q4_true);
        generateQuestion(q5_H,q5_A);

    } else if (qNum===5) {
        verifyAnswer(answerBtn, q5_true);
        showEndscreen();

    } else {
        console.log("ERROR: qNum is " + qNum);
    }

}

function verifyAnswer (answerBtn,qN_true) {

    console.log("answerBtn is "+answerBtn);
    console.log("qN_true is "+qN_true);

    
    console.log("q_Btn1Var is "+q_Btn1Var);
    console.log("q_Btn2Var is "+q_Btn2Var);
    console.log("q_Btn3Var is "+q_Btn3Var);
    console.log("q_Btn4Var is "+q_Btn4Var);

    if (answerBtn===qN_true) {
        q_SucFail.innerHTML = "Correct!";

        reveal(q_SucFail);

        // hide(q_SucFail.);
        // sect_sucFail.classList.add("d-none");

        setTimeout(() => {
            hide(q_SucFail); }, 2000); // 👈️ time in milliseconds

    } else {
        q_SucFail.innerHTML = "Wrong Answer! Time Penalty Applied";
        reveal(q_SucFail);
        // sect_sucFail.classList.add("d-none");

        // sect_q.classList.remove("d-none");
        setTimeout(() => {
            // const const_sucFail = sect_sucFail;
            // const_sucFail.classList.add("d-none"); }, 5000);
            hide(q_SucFail); }, 2000); // 👈️ time in milliseconds
        
        // applyTimePenalty();

    }

}

function applyTimePenalty () {

}

function showEndscreen () {

}

// function setTimeout(() => {
//     const const_sucFail = sect_sucFail;
//     const_sucFail.classList.add("d-none"); }, 5000); // 👈️ time in milliseconds
    