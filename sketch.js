var path, boy, leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Jake4.PNG", "Jake1.png", "Jake2.png","Jake3.png",)
 
}

function setup(){
  createCanvas(1366,657);

  path = createSprite(700,155,450,600)
  path.addImage("pathh", pathImg)
  path.velocityY = 4
  path.scale=1;

  boy = createSprite(700,160,150,400)
  boy.addAnimation("boyy", boyImg)
  boy.scale=0.8;
  
leftBoundary=createSprite(52,450,1000,900);
leftBoundary.visible = false

rightBoundary=createSprite(1351,450,1000,900);
rightBoundary.visible = false
}

function draw() {

  background("brown");
  
  boy.x = World.mouseX
  boy.y = World.mouseY
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary) 
  boy.collide(leftBoundary) 
  
  //código para redefinir o fundo
  if(path.y > 413 ){
    path.y = height / 4;
  }
  
  drawSprites();
}
