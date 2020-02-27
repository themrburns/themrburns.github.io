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
// you should use let instead of var most of the time
let classes = ["all", "ok", "none"];
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

  document.getElementById("after_submit").style.display = "block";


  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You've got " + correct + " correct.";
  // document.getElementById("pic").src = pictures[range];
  // we'll overwrite the classname for now because it's easier.
  // i'll add a link to the stackoverflow answer in case you want  to add/remove and keep some classes constant
  // since we'll be using the pic element multiple times we can store it in a variable
  let pic = document.getElementById("pic");

  // change the picture
  pic.src = pictures[range];
  // change the class
  pic.className = classes[range];

  // there you go ;)
  // this is the dumb solution by the way.
  // gonna show you something real quick
  // well, I would have to rewrite the whole thing to show you sadly.
  // i won't, but still you should know This
  // instead of using two arrays, you can use an object
  // let picturesObj = {
  //   all: {
  //     class: "all",
  //     image:  document.quiz.question1.value,
  //   },
  //
  //   ok: {
  //     class: "ok",
  //     image:  document.quiz.question2.value,
  //   },
  //
  //   none: {
  //     class: "none",
  //     image:  document.quiz.question3.value
  //   }
  // }
  // this object will hold other objects. each object has the class and the src of the image.
  // the way you get the class and the image of the object is:
  // picturesObject.all.class => gets you the class of the "all correct case"
  // picturesObject.all.image => gets you the src of the "all correct case"
  // instead of using numbers, you would use strings, text, which will make the code more readable and easier to manage.
  // still, up to you, your solution is very nice ;)


}
