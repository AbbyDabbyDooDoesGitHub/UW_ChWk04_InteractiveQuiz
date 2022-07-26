// alert('JS File is connected');

//function to get random item from an array
// function get_random (list) {
//     return list[Math.floor((Math.random()*list.length))]; 
// }

var qNum     = 0;
var duration = 75;

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
var sect_sucFail = document.getElementById("sucFail");
var sect_end     = document.getElementById("endscreen");

var score_Btn = document.getElementById('scoreBtn');
var close_Btn = document.getElementById('modalX');
var start_Btn = document.getElementById('startBtn');
var q_H1      = document.getElementById("questionH1");

var q_Block   = document.getElementById("questionBlock");

var q_Btn1    = document.getElementById("questionBtn1");
var q_Btn2    = document.getElementById("questionBtn2");
var q_Btn3    = document.getElementById("questionBtn3");
var q_Btn4    = document.getElementById("questionBtn4");
var q_SucFail = document.getElementById("successFailureText");
var navTimer  = document.getElementById("navbarTimer");
var endScore  = document.getElementById("endscreenScoreText");
var entryBtn  = document.getElementById("initialEntryBtn");

var q_Btn1Var = "";
var q_Btn2Var = "";
var q_Btn3Var = "";
var q_Btn4Var = "";


score_Btn.addEventListener("click", function(){showModal();});
start_Btn.addEventListener("click", function(){startQuiz();});
// entryBtn.addEventListener("click", function(){initialBtnClicked();});



q_Btn1.addEventListener("click", function(){nextQ(q_Btn1Var);});
q_Btn2.addEventListener("click", function(){nextQ(q_Btn2Var);});
q_Btn3.addEventListener("click", function(){nextQ(q_Btn3Var);});
q_Btn4.addEventListener("click", function(){nextQ(q_Btn4Var);});



function showModal () {
    $('#highscoreModal').modal('show');
    close_Btn.addEventListener("click", function(){closeModal();});
}

function closeModal () {
    $('#highscoreModal').modal('hide');
}

function reveal (section) {
    // console.log("ran reveal()");
    section.style.display = "block";
}

function hide (section) {
    // console.log("ran hide()");
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

    startTimer();
    
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
        hide(q_Block);
        reveal(sect_end);
        isItHighscore (duration);

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

        reveal(sect_sucFail);

        setTimeout(() => {
            hide(sect_sucFail); }, 1000); // 👈️ time in milliseconds

    } else {
        q_SucFail.innerHTML = "Wrong Answer! Time Penalty Applied";
        reveal(sect_sucFail);

        setTimeout(() => {

            hide(sect_sucFail); }, 1000); // 👈️ time in milliseconds
        
        applyTimePenalty();

    }

}

function applyTimePenalty () {
    var tempDur = duration - 10;
    duration = tempDur;

}

function isItHighscore (score) {
    duration = 0;
    navTimer.innerHTML = "Time: " + score;
    endScore.innerHTML = "You completed the quiz with a score of " + score;

    entryBtn.addEventListener("click", function(){initialBtnClicked((document.getElementById("initialEntryBox").value),score);});
}

function startTimer() {
    duration = 75;

    setInterval(function () {
        if (duration > 0) {
            var tempDur = duration - 1;
            duration = tempDur;

            navTimer.innerHTML = "Time: " + duration;
        }
    }, 1000);
}

function resetQuiz() {
    qNum     = 0;
    navTimer.innerHTML = "Time: 75";

    hide(sect_end);
    reveal(sect_start);

}

function initialBtnClicked(entry,score) {
    addHighscore(entry,score);
    showModal();
    resetQuiz();
}

// function addHighscore(entry,score){
//     console.log(entry +" " + score);

//     // Original object
//     var lastScoreObj = {"initials": entry, "score": score};

//     // This is a JSON string that is fit
//     // to be inserted into localStorage
//     var lastScoreJSONString = JSON.stringify(lastScoreObj);

//     // We can then save the string into localStorage
//     localStorage.setItem("lastScore", lastScoreJSONString);

//     // And if we were to *retrieve* it again,
//     // we can do so, and then convert it back to an object
//     // (Note that bertObjFromLS will be exactly the same as bertObj)
//     var lastScoreJSONStringFromLS = localStorage.getItem("lastScore");
//     var lastScoreObjFromLS = JSON.parse(lastScoreJSONStringFromLS);

//     console.log(lastScoreObjFromLS);
//     console.log(lastScoreObj);

//     localStorage.setItem("modal1_Score", {"initials": entry, "score": score});

//     reorderHighscores(lastScoreObj);

// }

function addHighscore(entry,score) {

    console.log(entry +" " + score);

    var lastScoreObj = {"initials": entry, "score": score};


    // console.log(lastScore + "is lastScore");
    // localStorage.setItem("modal1_Score", lastScore);

    var modal1_ScoreNotParsed = localStorage.getItem("modal1_Score");
    var modal1_ScoreParsed = JSON.parse(modal1_ScoreNotParsed);
    // console.log("modal1_ScoreNotParsed is "+ modal1_ScoreNotParsed);
    // console.log("modal1_Parsed[score]"+ modal1_Parsed["score"] );

    var modal2_ScoreNotParsed = localStorage.getItem("modal2_Score");
    var modal2_ScoreParsed = JSON.parse(modal2_ScoreNotParsed);

    var modal3_ScoreNotParsed = localStorage.getItem("modal3_Score");
    var modal3_ScoreParsed = JSON.parse(modal3_ScoreNotParsed);

    var modal4_ScoreNotParsed = localStorage.getItem("modal4_Score");
    var modal4_ScoreParsed = JSON.parse(modal4_ScoreNotParsed);

    var modal5_ScoreNotParsed = localStorage.getItem("modal5_Score");
    var modal5_ScoreParsed = JSON.parse(modal5_ScoreNotParsed);

    var modal6_ScoreNotParsed = localStorage.getItem("modal6_Score");
    var modal6_ScoreParsed = JSON.parse(6);

    var modal7_ScoreNotParsed = localStorage.getItem("modal7_Score");
    var modal7_ScoreParsed = JSON.parse(modal7_ScoreNotParsed);

    var modal8_ScoreNotParsed = localStorage.getItem("modal8_Score");
    var modal8_ScoreParsed = JSON.parse(modal8_ScoreNotParsed);

    var modal9_ScoreNotParsed = localStorage.getItem("modal9_Score");
    var modal9_ScoreParsed = JSON.parse(modal9_ScoreNotParsed);

    var modal10_ScoreNotParsed = localStorage.getItem("modal10_Score");
    var modal10_ScoreParsed = JSON.parse(modal10_ScoreNotParsed);

    // var modal1_ScoreParsed = JSON.parse(modal1_ScoreNotParsed);
    // console.log(modal1_ScoreParsed);

    // var modal2_ScoreParsed = JSON.parse(localStorage.getItem("modal2_Score"));
    // var modal3_ScoreParsed = JSON.parse(localStorage.getItem("modal3_Score"));
    // var modal4_ScoreParsed = JSON.parse(localStorage.getItem("modal4_Score"));
    // var modal5_ScoreParsed = JSON.parse(localStorage.getItem("modal5_Score"));
    // var modal6_ScoreParsed = JSON.parse(localStorage.getItem("modal6_Score"));
    // var modal7_ScoreParsed = JSON.parse(localStorage.getItem("modal7_Score"));
    // var modal8_ScoreParsed = JSON.parse(localStorage.getItem("modal8_Score"));
    // var modal9_ScoreParsed = JSON.parse(localStorage.getItem("modal9_Score"));
    // var modal10_ScoreParsed = JSON.parse(localStorage.getItem("modal10_Score"));


    if(modal1_ScoreNotParsed==null) {
        // This is a JSON string that is fit
        // to be inserted into localStorage
        var lastScoreJSONString = JSON.stringify(lastScoreObj);

        // We can then save the string into localStorage
        localStorage.setItem("modal1_Score", lastScoreJSONString);

        localStorage.setItem("modal1_Score", lastScore);
        // console.log("parsed: "(JSON.parse(modal1_ScoreNotParsed)));
        console.log("modal1_ScoreObjFromLS is null");
    } else if (modal2_ScoreNotParsed==null) {
        if (modal1_ScoreParsed["score"]<lastScoreObj["score"]) {
            localStorage.setItem("modal1_Score", lastScoreObj);
            localStorage.setItem("modal2_Score", modal1_ScoreParsed);

            // console.log("last score is greater than modal1");
            // console.log("modal1_ScoreParsed[score] is"+modal1_ScoreParsed["score"]);
            // console.log("lastScoreObj[score] is"+lastScoreObj["score"]);

        } else {
            localStorage.setItem("modal2_Score", lastScoreObj);
            // console.log("modal1_ScoreParsed[score] is"+modal1_ScoreParsed["score"]);
            // console.log("lastScoreObj[score] is"+lastScoreObj["score"]);
        }


        console.log("modal2_ScoreObjFromLS is null");
    // } else if (modal3_ScoreParsed==null) {
    //     console.log("modal3_ScoreObjFromLS is null");
    // } else if (modal4_ScoreParsed==null) {
    //     console.log("modal4_ScoreObjFromLS is null");
    // } else if (modal5_ScoreParsed==null) {
    //     console.log("modal5_ScoreObjFromLS is null");
    // } else if (modal6_ScoreParsed==null) {
    //     console.log("modal6_ScoreObjFromLS is null");
    // } else if (modal7_ScoreParsed==null) {
    //     console.log("modal7_ScoreObjFromLS is null");
    // } else if (modal8_ScoreParsed==null) {
    //     console.log("modal8_ScoreObjFromLS is null");
    // } else if (modal9_ScoreParsed==null) {
    //     console.log("modal9_ScoreObjFromLS is null");
    // } else if (modal10_ScoreParsed==null) {
    //     console.log("modal10_ScoreObjFromLS is null");
    } else {
        console.log("not parsed " + modal1_ScoreNotParsed);
        
        console.log("parsed: "+(JSON.parse(modal1_ScoreNotParsed)));
        console.log("modal10_ScoreObjFromLS is NOT null");
    }
 
        // var archive = {}, // Notice change here
        //     keys = Object.keys(localStorage),
        //     i = keys.length;
    
        // while ( i-- ) {
        //     archive[ keys[i] ] = localStorage.getItem( keys[i] );
        // }

        // console.log("archive is "+ archive);
    
        // return archive;
        
}

// function setScoreStorage(){

//     window.localStorage.getItem('user');

//     const score_LS1 = {
//         initials: "1",
//         score: "1",
//     }
//     const score_LS2 = {
//         initials: "2",
//         score: "2",
//     }
//     const score_LS3 = {
//         initials: "3",
//         score: "3",
//     }
//     const score_LS4 = {
//         initials: "4",
//         score: "4",
//     }
//     const score_LS5 = {
//         initials: "5",
//         score: "5",
//     }
//     const score_LS6 = {
//         initials: "6",
//         score: "1",
//     }
//     const score_LS7 = {
//         initials: "7",
//         score: "2",
//     }
//     const score_LS8 = {
//         initials: "8",
//         score: "3",
//     }
//     const score_LS9 = {
//         initials: "9",
//         score: "4",
//     }
//     const score_LS10 = {
//         initials: "10",
//         score: "5",
//     }
    
//     window.localStorage.setItem('user', JSON.stringify(person));

//     var score_1   = document.getElementById("modal1");
//     var score_2   = document.getElementById("modal2");
//     var score_3   = document.getElementById("modal3");
//     var score_4   = document.getElementById("modal4");
//     var score_5   = document.getElementById("modal5");
//     var score_6   = document.getElementById("modal6");
//     var score_7   = document.getElementById("modal7");
//     var score_8   = document.getElementById("modal8");
//     var score_9   = document.getElementById("modal9");
//     var score_10  = document.getElementById("modal10");

//     localStorage.setItem["Highscore" => "TEST1","Score"=>"5"];
//     localStorage.setItem["Highscore"=> "TEST2","Score"=>"7"];
//     localStorage.setItem["Highscore"=> "TEST3","Score"=>"9"];
//     localStorage.setItem["Highscore"=> "TEST4","Score"=>"25"];
//     localStorage.setItem["Highscore"=> "TEST5","Score"=>"45"];
//     localStorage.setItem["Highscore"=> "TEST6","Score"=>"15"];
//     localStorage.setItem["Highscore"=> "TEST7","Score"=>"17"];
//     localStorage.setItem["Highscore"=> "TEST8","Score"=>"19"];
//     localStorage.setItem["Highscore"=> "TEST9","Score"=>"2"];
//     localStorage.setItem["Highscore"=> "TEST10","Score"=>"4"];
// }

    