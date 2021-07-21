

function setup() {
  createCanvas(400, 400);
  pg = createGraphics(400, 250);
  fill(240);
  noStroke();
}

function draw() {
  background(220);
  let t = frameCount/60;
  noLoop();
  ellipse(30, 30, 30, 30)
  stroke('white')
  rect(200, 2000, 2000, 200)
}

function draw() {
  background('lightsalmon');
  ellipse(40, 80, 120, 120)
 ellipse(35, 160, 120, 120)
  ellipse(20, 260, 120, 120)
  ellipse(10, 360, 120, 120)
  var step = 30;
  for (var x = 0; x < 400; x = x + step) {
    for (var y = 0; y < 400; y = y + step) {
      strokeWeight(1+x/step);
      stroke('powderblue');
      line(x,y,x+(step/1.2),y+(step/1.2));
      strokeWeight(1+x/step);
      line(x+(step + 400),y+(step + 451),x+step,y+step)
    }
  }
}


