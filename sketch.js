var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  background("yellow")
  if(keyIsDown(RIGHT_ARROW)){
    background("red")
  }
  drawSprites()
}




