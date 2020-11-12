var a,b;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="yellow";
  b=createSprite(300,100,50,50);
  b.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  a.x=World.mouseX;
  a.y=World.mouseY;
  if(a.x-b.x < a.width/2+b.width/2 && b.x-a.x < a.width/2+b.width/2 && a.y-b.y < a.height/2+b.height/2 && b.y-a.y < a.height/2+b.height/2) {
  
    a.shapeColor="red";
    b.shapeColor="red";

  }
  else {

    a.shapeColor="yellow";
    b.shapeColor="green";
  }
  drawSprites();
}