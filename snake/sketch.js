var s;
var $scale = 20;
var food;

function setup() {
  console.log('setup');
  let canvas = createCanvas(600, 600);
  s = new Snake();
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
  s.death();
  s.update();
  s.show();
  if (s.eat(food)) {
    pickLocation();
  }




  fill(255, 0, 100);
  rect(food.x, food.y, $scale, $scale)
}

function keyPressed() {
  if (keyCode === 38) {
    s.dir(0, -1);
  } else if (keyCode === 40) {
    s.dir(0, 1);
  } else if (keyCode === 37) {
    s.dir(-1, 0);
  } else if (keyCode === 39) {
    s.dir(1, 0);
  } else if (keyCode === 80) {
    noLoop();
  } else if (keyCode === 82) {
    loop();
  }
}

// function Snake() {
//   this.x = 0;
//   this.y = 0;
//   this.xspeed = 1;
//   this.yspeed = 0;
//
//   this.update = function() {
//     this.x = this.x + this.xspeed;
//     this.y = this.y + this.yspeed;
//   }
//
//   this.show = function() {
//     fill(255);
//     rect(this.x, this.y, 10, 10);
//   }
// }
