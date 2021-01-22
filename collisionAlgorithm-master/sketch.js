var fixedRect, movingRect;
var GO1, GO2, GO3, GO4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  GO1 = createSprite(100,100,50,50);
  GO1.shapeColor = "aqua";

  GO2 = createSprite(200, 100, 50, 50);
  GO2.shapeColor = "aqua";

  GO3 = createSprite(300,100,50,50);
  GO3.shapeColor = "aqua";

  GO4 = createSprite(400, 100, 50, 50);
  GO4.shapeColor = "aqua";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTounching(movingRect, GO4)){
    movingRect.shapeColor = "yellow";
    GO4.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "green";
    GO4.shapeColor = "aqua";
  }

  drawSprites();
}

