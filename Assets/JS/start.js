// EXAMPLE OF SCRIPTING ON STARTUP

var startBtn = document.querySelector('#startButton')
var startEl = document.querySelector('#start')
var answersEl = document.getElementById("answers");
var quoteEl = document.getElementById("quote");
var streakBarEl = document.getElementById("streakBar")
var screenShotBtn = document.getElementById("screenShotBtn")

function startGame() {
    //hide the main page
    startEl.classList.add("hide");
    //show the quiz start screen
    answersEl.classList.remove("hide");
    quoteEl.classList.remove("hide");
    streakBarEl.classList.remove("hide");

    // pullRandomQuotes();
};

//Event listener for button to run function startGame
startBtn.addEventListener('click', startGame);

// old code not using
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

    // var modal4_ScoreNotParsed = localStorage.getItem("modal4_Score");
    // var modal4_ScoreParsed = JSON.parse(modal4_ScoreNotParsed);

    // var modal5_ScoreNotParsed = localStorage.getItem("modal5_Score");
    // var modal5_ScoreParsed = JSON.parse(modal5_ScoreNotParsed);

    // var modal6_ScoreNotParsed = localStorage.getItem("modal6_Score");
    // var modal6_ScoreParsed = JSON.parse(6);

    // var modal7_ScoreNotParsed = localStorage.getItem("modal7_Score");
    // var modal7_ScoreParsed = JSON.parse(modal7_ScoreNotParsed);

    // var modal8_ScoreNotParsed = localStorage.getItem("modal8_Score");
    // var modal8_ScoreParsed = JSON.parse(modal8_ScoreNotParsed);

    // var modal9_ScoreNotParsed = localStorage.getItem("modal9_Score");
    // var modal9_ScoreParsed = JSON.parse(modal9_ScoreNotParsed);

    // var modal10_ScoreNotParsed = localStorage.getItem("modal10_Score");
    // var modal10_ScoreParsed = JSON.parse(modal10_ScoreNotParsed);




    if(modal1_ScoreNotParsed==null) {
        localStorage.setItem("modal1_Score", lastScoreObj);
        console.log("modal1_ScoreObjFromLS is null");

    } else if (modal2_ScoreNotParsed==null) {
        // var modal2_ScoreParsed = JSON.parse(modal2_ScoreNotParsed);


        if (modal1_ScoreParsed["score"]<lastScoreObj["score"]) {
            localStorage.setItem("modal1_Score", lastScoreObj);
            localStorage.setItem("modal2_Score", modal1_ScoreParsed);
        } else {
            localStorage.setItem("modal2_Score", lastScoreObj);
        }
        console.log("modal2_ScoreObjFromLS is null");

    } else if (modal3_ScoreParsed==null) {
        // const array = [
        //     [123, 3],
        //     [745, 4],
        //     [643, 5],
        //     [643, 2]
        //   ];
          
        //   const sortedArray = array.sort(([a], [b]) => {
        //     return b - a;
        //   });
          
        //   console.log(sortedArray)



        // const array = [
        //     [modal1_ScoreParsed,
        //      modal2_ScoreParsed,
        //      lastScoreObj]
        //   ];
        //   console.log("array is "+ Array);

        //   const sortedArray = array;          
        // //   const sortedArray = array.sort(([b], [a]) => {
        // //     return b - a;
        // //   });
          
        //   console.log("sorted array is "+ sortedArray);



        // var modal2_ScoreParsed = JSON.parse(modal2_ScoreNotParsed);
          const array = [
            [modal1_ScoreParsed["score"],
             modal2_ScoreParsed["score"],
             lastScoreObj["score"]]
          ];
          console.log("array is "+ Array);

          const sortedArray = array;          
        //   const sortedArray = array.sort(([b], [a]) => {
        //     return b - a;
        //   });
          
          console.log("sorted array is "+ sortedArray);



        console.log("modal3_ScoreObjFromLS is null");
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