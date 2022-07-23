// alert('JS File is connected');

//function to get random item from an array
// function get_random (list) {
//     return list[Math.floor((Math.random()*list.length))]; 
// }

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

function generateQuestion {
    var q1_header = "Question 1 example question wow so question-y?";
    var q1_answers = ["answer1","answer2","answer3","answer4"];
    
    var q2_header = "Question 1 example question wow so question-y?";
    var q2_answers = ["answer1","answer2","answer3","answer4"];

    var q3_header = "Question 1 example question wow so question-y?";
    var q3_answers = ["answer1","answer2","answer3","answer4"];

    var q4_header = "Question 1 example question wow so question-y?";
    var q4_answers = ["answer1","answer2","answer3","answer4"];

    var q5_header = "Question 1 example question wow so question-y?";
    var q5_answers = ["answer1","answer2","answer3","answer4"];

    shuffle(q1_answers);
    shuffle(q2_answers);
    shuffle(q3_answers);
    shuffle(q4_answers);
    shuffle(q5_answers);
}


