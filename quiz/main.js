// welcome to JS
// declare the button's function, which checks the victim's answers
function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  if (question1 == "Parachute") {
     correct++;
  }

  if (question2 == "Opera") {
     correct++;
  }

  if (question3 == "Canberra") {
     correct++
  }

var messages = ["Great Job!", "That's okay!", "You really need to do better"];
var pictures = ["img/all.gif", "img/ok.gif", "img/none.gif"];
var range;

  if (correct < 1) {
    range = 2;
  }

  if (correct > 0 && correct < 3) {
    range = 1;
  }

  if (correct > 2) {
    range = 0;
  }

  document.getElementById("after_submit").style.display = "block"


  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You've got " + correct + " correct.";
  document.getElementById("pic").src = pictures[range];
}
