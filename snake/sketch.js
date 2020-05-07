var snake;
var $scale = 20;
var food;

function setup() {
  console.log('setup');
  let canvas = createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  pickLocation();
  canvas.center('horizontal');
}

function pickLocation() {
  var cols = floor(width/$scale);
  var rows = floor(height/$scale);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult($scale);
}

function draw() {
  background(51);
  snake.death();
  snake.update();
  snake.show();
  if (snake.eat(food)) {
    pickLocation();
  }




  fill(255, 0, 100);
  rect(food.x, food.y, $scale, $scale)
}

function keyPressed() {
  // if snake is moving in the x axis in the positive direction and we press the left arrow, we want nothing to happen
  // the same should apply to the other three directions

    if (keyCode === 38) { //down arrow
      if (1 == snake.yspeed) {
        return;
      }
      snake.dir(0, -1);
  } else if (keyCode === 40) { //up arrow
      if (-1 == snake.yspeed) {
        return;
      }

      snake.dir(0, 1);
  } else if (keyCode === 37) { //left arrow
      if (1 == snake.xspeed) {
        return;
      }

      snake.dir(-1, 0);
  } else if (keyCode === 39) { //right arrow
      if (-1 == snake.xspeed) {
        return;
      }
      snake.dir(1, 0);
  } else if (keyCode === 80) { //p button / pause
      noLoop();
  } else if (keyCode === 82) { //r button / resume / unpause
      loop();
  }
}

// function Snake() {
//   thisnake.x = 0;
//   thisnake.y = 0;
//   thisnake.xspeed = 1;
//   thisnake.yspeed = 0;
//
//   thisnake.update = function() {
//     thisnake.x = thisnake.x + thisnake.xspeed;
//     thisnake.y = thisnake.y + thisnake.yspeed;
//   }
//
//   thisnake.show = function() {
//     fill(255);
//     rect(thisnake.x, thisnake.y, 10, 10);
//   }
// }
