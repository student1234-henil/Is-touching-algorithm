function setup() {
  createCanvas(800,400);
 movingRectangle = createSprite(400, 200, 50, 50);
  movingRectangle.shapeColor="green";
  fixdRectangle = createSprite(600, 80, 80, 30);
    fixdRectangle.shapeColor="green";

}

function draw() {
  background(0); 
movingRectangle.x=World.mouseX;
movingRectangle.y=World.mouseY;

  if (movingRectangle.x-fixdRectangle.x <movingRectangle.width/2+ fixdRectangle.width/2 && 
    fixdRectangle.x- movingRectangle.x < fixdRectangle.width/2+movingRectangle.width/2 &&
    movingRectangle.y-fixdRectangle.y <movingRectangle.height/2+ fixdRectangle.height/2 && 
    fixdRectangle.y- movingRectangle.y < fixdRectangle.height/2+movingRectangle.height/2 ) {
  fixdRectangle.shapeColor="red";
  movingRectangle.shapeColor="red";    
  }
else{
  fixdRectangle.shapeColor="green";
  movingRectangle.shapeColor="green";
}
  


  drawSprites();
}