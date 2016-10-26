var x=50;
var y=100;

var speed =4;

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background (255)
  
  stroke (0,255,0);
  fill (255,255,0);
  ellipse (x, y, 100, 100);
  
  stroke (0,255,30);
  fill (0,200,250);
  ellipse (x, y, 40, 40);
  
   fill (255,0, 200)
    ellipse (x, y+170,80,80);
    
  stroke (30,200,200);
  fill (40, 220,250,100);
  ellipse (x, y+80,150,150);
  
  x = x+speed;
  
  if (x>=400){
  speed = -3;
  }
  if (x<=0){
    speed =3;
  }

}

function mousePressed () {
  background (10,250,0);
  
}