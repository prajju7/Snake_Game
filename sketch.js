var s;
var food;

function setup() {
  createCanvas(400, 400);
  s = new snake();
  frameRate(5);
  picklocation();  
}

function draw() {
  background(220,0,0);
  s.death();
  s.update();
  s.show();
  if(s.eat(food))
  {
    picklocation();
  }
  fill(200,150,200);
  rect(food.x,food.y,20,20);
}

 function picklocation()
{
  var rows = floor(height/20);
  var cols = floor(width/20);
  food = createVector(floor(random(rows)), floor(random(cols)));
  food.mult(20);
}

function keyPressed()
{
  if (keyCode === DOWN_ARROW)
  {
    s.yspeed = 1;
    s.xspeed = 0;
  }
  else if (keyCode === RIGHT_ARROW)
  {
    s.xspeed = 1;
    s.yspeed = 0;
  }
  else if (keyCode === UP_ARROW)
  {
    s.xspeed = 0;
    s.yspeed = -1;
  }
  else if (keyCode === LEFT_ARROW){
  
    s.xspeed = -1;
    s.yspeed = 0;
  }
  
}
