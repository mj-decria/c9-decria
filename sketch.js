var CAXINHADOPAI;
function setup() {
  createCanvas(800,800);
  CAXINHADOPAI = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if (keyIsDown("right")){
   CAXINHADOPAI.x = CAXINHADOPAI.x + 5; 
  }
drawSprites();
}




