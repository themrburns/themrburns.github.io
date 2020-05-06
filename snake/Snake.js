function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.die = 0;

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.die = 1;
      }
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }

    this.tail[this.total-1] = createVector(this.x, this.y);
    if (this.die > 0) {
      this.tail[];
      this.total = 0;
    }

    this.x = this.x + this.xspeed*$scale;
    this.y = this.y + this.yspeed*$scale;

    this.x = constrain(this.x, 0, width-$scale);
    this.y = constrain(this.y, 0, height-$scale);
    document.getElementById("1").innerHTML = "Score: " + (this.total + 1)/1;
  }

  this.show = function() {
    fill(255);
    for (var i =0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, $scale, $scale);
    }
    rect(this.x, this.y, $scale, $scale);

  }
}
