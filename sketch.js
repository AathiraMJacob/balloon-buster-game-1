var grass,grassImage;
var bow,bowImage;
var blueBalloon, greenBalloon,redBalloon,pinkBalloon,balloon;
var ground,invisibleGround;
var arrow,arrow_temp;



function preload(){
 //load your images here 
  grassImage=loadImage('background0.png');
  bowImage=loadImage('bow0.png');
 balloon1=loadImage('green_balloon0.png');
 balloon2=loadImage('blue_balloon0.png');
  balloon3=loadImage('red_balloon0.png');
  balloon4=loadImage('pink_balloon0.png');
  arrow=loadImage('arrow0.png');
  
}

function setup() {
  createCanvas(500, 500);
  background('blue')
 grass=createSprite(10,10,600,600);
 grass.addImage(grassImage);
grass.scale=37;
   grass.x = grass.width/2;
  
  bow=createSprite(450,200,60,60);
  bow.addImage(bowImage);
  
  for (var 
    i=40; i< 400; i=i+70) {
   blueBalloon=createSprite(20,i,20,20+i);
  blueBalloon.addImage(balloon2);
    blueBalloon.scale=0.1;
  }
  
   
  for (var 
    i=45; i< 400; i=i+60) {
   greenBalloon=createSprite(70,i,20,20+i);
  greenBalloon.addImage(balloon1);
    greenBalloon.scale=0.08
  }
    
  for (var 
    i=70; i< 400; i=i+90) {
   redBalloon=createSprite(120,i,20,20+i);
  redBalloon.addImage(balloon3);
  redBalloon.scale=0.1; 
  }
  for (var 
    i=80; i< 400; i=i+80) {
   pinkBalloon=createSprite(170,i,20,20+i);
   pinkBalloon.addImage(balloon4);
  pinkBalloon.scale=1.2; 
  }
  
  ground=createSprite(500,500,1000,140);
  ground.shapeColor='green';
  ground.x = ground.width/2;
  
  
   invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
}

function draw() { 
  ground.velocityX = -4;
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  bow.y=World.mouseY;
   grass.velocityX = -4;
  if (grass.x < 0){
    grass.x = grass.width/2;
  }
 if (keyDown("space")){
   var arrow_temp=createArrow();
   arrow_temp.y=bow.y;
 }
  drawSprites();
}
function createArrow(){
  arrow1=createSprite(450,200,60,60);
  arrow1.addImage(arrow);
  arrow1.velocityX=-6;
  arrow1.scale=0.3;
  return arrow1;
}