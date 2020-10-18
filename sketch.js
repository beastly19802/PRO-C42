var hr,mn,sc
var hrAngle,mnAngle,scAngle

function setup() {
  createCanvas(800,400);
  hr = hour()
  mn = minute()
  sc = second()
  angleMode(DEGREES)
  hrAngle = map(hr,0,24,0,360)
  mnAngle = map(mn,0,60,0,360)
  scAngle = map(sc,0,60,0,360)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}