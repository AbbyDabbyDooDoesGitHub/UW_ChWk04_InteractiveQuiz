// alert('JS File is connected');

// GLOBAL VARIABLES--------------------------------------------------------------------
// CREATE QUESTIIONS AND ANSWERS
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

// MISC GLOBAL VARIABLES FOR DOC LOCATIONS
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
var againBtn  = document.getElementById("tryAgainBtn");

// GLOBAL VARIABLES FOR ANSWER BUTTONS
var q_Btn1Var = "";
var q_Btn2Var = "";
var q_Btn3Var = "";
var q_Btn4Var = "";

// GLOBAL VARIABLES FOR TIMER
var qNum     = 0;
var duration = 75;
var myInterval;
var isHighscore = true;
// var lastScore;
var score;

// // GLOBAL VARIABLES FOR LOCAL STORAGE STUFF
const HIGH_SCORES = 'highScores';
const highScoreString = localStorage.getItem(HIGH_SCORES);
console.log(highScoreString);
// const highScores = JSON.parse(highScoreString) ?? [];
const highScores = JSON.parse.highScoreString ?? [];
console.log(highScores);
// // The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// EVENT LISTENERS FOR BUTTONS---------------------------------------------------------
score_Btn.addEventListener("click", function(){showModal();});
start_Btn.addEventListener("click", function(){startQuiz();});
entryBtn.addEventListener("click", function(){validateEntry();});
againBtn.addEventListener("click", function(){resetQuiz();});
q_Btn1.addEventListener("click", function(){nextQ(q_Btn1Var);});
q_Btn2.addEventListener("click", function(){nextQ(q_Btn2Var);});
q_Btn3.addEventListener("click", function(){nextQ(q_Btn3Var);});
q_Btn4.addEventListener("click", function(){nextQ(q_Btn4Var);});

// MODAL STUFF-------------------------------------------------------------------------
// FUNCTION TO SHOW MODAL
function showModal () {
    // update highscores from local storage
    showHighScores()

    $('#highscoreModal').modal('show');
    close_Btn.addEventListener("click", function(){closeModal();});
}

// FUNCTION TO CLOSE MODAL
function closeModal () {
    $('#highscoreModal').modal('hide');
}

// SWITCH BETWEEN "PAGES"--------------------------------------------------------------
// FUNCTION TO REVEAL BY SECTION (CLASS)
function reveal (section) {
    // console.log("ran reveal()");
    section.style.display = "block";
}

// FUNCTION TO HIDE BY SECTION (CLASS)
function hide (section) {
    // console.log("ran hide()");
    section.style.display = "none";
}

// QUIZ SECTION------------------------------------------------------------------------
// FUNCTION TO SHUFFLE AN ARRAY (FOR QUESTION ANSWER ORDER)
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

// FUNCTION TO RUN AT START OF QUIZ
function startQuiz() {
    // console.log("start quiz btn clicked");
    // console.log("Array:" + q1_A + "   A is " + q1_true);

    // HIDE START SECT AND REVEAL QUIZ SECT
    hide(sect_start);
    reveal(q_Block);

    // CHANGE QUESTION TO FIRST Q
    generateQuestion(q1_H,q1_A);

    // START TIMER FOR QUIZ
    startTimer();
}

// GENERATE QUESTIONS FOR QUIZ, REORDER THE ANSWERS, CHANGE TEXT
function generateQuestion (q_question,q_answerArray) {
    // SHUFFLE ANSWER ORDER
    shuffle(q_answerArray);

    // console.log("Array:" + q1_A + "   A is " + q1_true);

    q_H1.innerHTML   = q_question;

    q_Btn1.innerHTML = q_answerArray[0];
    q_Btn2.innerHTML = q_answerArray[1];
    q_Btn3.innerHTML = q_answerArray[2];
    q_Btn4.innerHTML = q_answerArray[3];

    q_Btn1Var = q_answerArray[0];
    q_Btn2Var = q_answerArray[1];
    q_Btn3Var = q_answerArray[2];
    q_Btn4Var = q_answerArray[3];

    // console.log("qNum is "+qNum);

    // INCREASE QNUM SO THE QUESTIONS WILL PROGRESS
    var tempQNum = qNum + 1;
    qNum = tempQNum;
    
    // console.log("qNum is "+qNum);
}

// CHANGE Q'S IN QUIZ TO 2,3,4,5,ENDSCREEN
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

        // HIDE QUIZ, REVEAL ENDSCREEN
        hide(q_Block);
        reveal(sect_end);

        // DETERMINE IF IT'S A HIGH SCORE AND LOG SCORE
        finalizeScore ();

    } else {
        console.log("ERROR: qNum is " + qNum);
    }
}

// DETERMINE IF THE ANSWER WAS CORRECT
function verifyAnswer (answerBtn,qN_true) {

    if (answerBtn===qN_true) {
        // CHANGE TEXT FOR CORRECT ANSWER
        q_SucFail.innerHTML = "Correct!";

        // REVEAL THE SUCCESS TEXT AND LINE
        reveal(sect_sucFail);

        // SET A TIMEOUT SO THE SUCCESS TEXT AND LINE GOES AWAY AFTER 1 SECOND
        setTimeout(() => {
            hide(sect_sucFail); 
        }, 1000); // 👈️ time in milliseconds

    } else {
        // CHANGE TEXT FOR WRONG ANSWER
        q_SucFail.innerHTML = "Wrong Answer! 10sec Time Penalty Applied";

        // REVEAL THE WRONG TEXT AND LINE
        reveal(sect_sucFail);

        // APPLY A TIME PENALTY FOR WRONG ANSWER
        applyTimePenalty();

        // SET A TIMEOUT SO THE FAILURE TEXT AND LINE GOES AWAY AFTER 1 SECOND
        setTimeout(() => {
            hide(sect_sucFail); 
        }, 1000); // 👈️ time in milliseconds
    }
}

// RELATING TO TIME AND THE TIMER------------------------------------------------------
// APPLY TIME PENALTY OF 10 SECONDS
function applyTimePenalty () {
    var tempDur = duration - 10;
    duration = tempDur;
}

// START TIMER FOR QUIZ
function startTimer() {
    // RESET DURATION TO 75
    duration = 75;

    // REPEAT ONCE A SECOND
    myInterval = setInterval(myTimer, 1000);
}

// REDUCE BY 1 AND PRINT TO TIMER
function myTimer() {
    if (duration > 0) {
        var tempDur = duration - 1;
        duration = tempDur;

        navTimer.innerHTML = "Time: " + duration;
    }
}

function stopTimer() {
    // timerVar = 0;
    clearInterval(myInterval);
}

// ENDSCREEN AND HIGHSCORE LOCAL STORAGE-----------------------------------------------
// UN-COMMENT OUR BELOW TO CLEAR OUT LOCAL STORAGE IMMEDIATELY 
// localStorage.clear();

// RESET QUIZ
function resetQuiz() {
    // SET QNUM TO ZERO SO THE Q'S PROGRESS WHEN QUIZ STARTS
    qNum     = 0;

    // RESET TIMER TEXT TO READ THE BASE STARTING TIME OF 75 SEC
    navTimer.innerHTML = "Time: 75";

    // HIDE ENDSCREEN AND GO BACK TO START
    hide(sect_end);
    reveal(sect_start);
}

// DETERMINE IF IT'S A HIGH SCORE, GENERATE TEXT FOR SCORE, ADD EVENT LISTENER TO ENTRY BUTTON
function finalizeScore () {
    // SET DURATION TO 0 TO END COUNTDOWN FUNCTION
    score = duration;
    duration = 0;
    stopTimer();

    // REPLACE TIMER TEXT WITH THE SCORE ACHIEVED
    navTimer.innerHTML = "Time: " + score;

    testScores ();
}

// TEST IF THE SCORE IS HIGHER THAN THE LOWEST SAVED HIGHSCORE AND CHANGE OPTIONS ACCORDINGLY
function testScores () {
    // const NO_OF_HIGH_SCORES = 10;

    // const highScoreString = localStorage.getItem("highScores");
    // const highScores = JSON.parse(highScoreString) ?? [];

    var posLowNum = highScores[9];
    var lowestScore = 0;
    console.log("posLowNum_score is "+posLowNum_score);

    if (posLowNum == null) {
        lowestScore = 0;
        console.log("lowestScore is"+ lowestScore);
    } else {
        var posLowNum_score = posLowNum["score"];
        
        lowestScore = posLowNum_score;
        console.log("lowestScore is "+lowestScore);
    }

    if (score > lowestScore) {
        isHighscore = true;

        // TIME ACHIEVED TEXT ABOVE INITIAL BOX
        endScore.innerHTML = "New highscore! You completed the quiz with a score of " + score + "!<br>Enter your initials to save your score to the highscore list.";

        // // REVEAL INITIAL BOX
        reveal(document.getElementById("initialEntryBoxDiv"));
        hide(document.getElementById("tryAgainDiv"));
        
    } else {
        isHighscore = false;

        // // HIDE INITIAL BOX
        // hide(document.getElementById("initialEntryBox"));

        // TIME ACHIEVED TEXT ABOVE INITIAL BOX
        endScore.innerHTML = "You completed the quiz with a score of " + score + ".<br>Try again for a score higher than "+lowestScore+" to make the highscore list!";

        hide(document.getElementById("initialEntryBoxDiv"));
        reveal(document.getElementById("tryAgainDiv"));

    }
}

// SAVE HIGHSCORE TO LOCAL STORAGE
function saveHighScore(entry) {
    newScore = { score, entry };
    
    // 1. Add to list
    highScores.push(newScore);
  
    // 2. Sort the list
    highScores.sort((a, b) => b.score - a.score);
    
    // 3. Select new list
    highScores.splice(10);
    
    // 4. Save to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    resetQuiz();
    showModal()
};

function showHighScores() {
    // const highScores = JSON.parse(localStorage.getItem("highScores")) ?? [];
    const highScoreList = document.getElementById("highScores");
    
    highScoreList.innerHTML = highScores
      .map((score) => `<li>${score.score} - ${score.entry}`)
      .join('');
}

// VALIDATE INITIAL ENTRY--------------------------------------------------------------

function validateEntry() {
    // const highScores = JSON.parse(localStorage.getItem("highScores")) ?? [];
    // const highScoreList = document.getElementById("highScores");

    var entry = document.getElementById("initialEntryBox").value;
    console.log("entry is "+entry);

    if (entry.length === 0) {
        if (confirm("Would you like to proceed without entering initials?")) {
            entry = "UNK";
            console.log("entry is "+entry);
            saveHighScore(entry);
            resetQuiz();
                    
            if (isHighscore == true) {
            saveHighScore(entry_s);
            }
        } else {
            return;
        } 

    } else if (entry.length > 3) {
        alert("Initials can be no longer than 3 characters.");
        return;
    } else {
        var entry_upper = entry.toUpperCase();
        saveHighScore(entry_upper);
        resetQuiz();

    }





    // if (box.length === 0) {
    //     if (confirm("Would you like to proceed without entering initials?")) {
    //         entry = "UNK";
    //         entry_s = entry.stringify;
    //         console.log("entry is "+entry);
    //         resetQuiz();
            
    //         if (isHighscore == true) {
    //           saveHighScore(entry_s);
              
      
    //         }
    //       } else {
    //         return;
    //       } 
    // } else if (box.length > 3) {
    //     alert("Initial entries must be no more than 3 characters.");
    //     return;
    // } else {
    //     entry = box;
    //     resetQuiz();
    //     saveHighScore(entry);
    // }


}

// // // Add data
// // localStorage.setItem('myCar', 'Tesla');

// // // Read data
// // const car = localStorage.getItem('myCar');

// // // Remove specific data
// // localStorage.removeItem('myCar');

// // // Remove all data
// // localStorage.clear();
