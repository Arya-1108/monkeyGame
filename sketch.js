var PLAY = 1;
var END = 0;
var gameState = PLAY;

var survivalTime=0;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running); 
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.x = ground.width /2;
  ground.velocityX = -4 ;
  console.log(ground.x)
  
  score=0
}


function draw() {
    background(300);
  
   if (keyDown("space")) {
   monkey.velocityY = -10;
}

 monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0) {
  ground.x = ground.width / 2;
} 
  
  Obstacle();
  food();
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score :"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time:"+survivalTime,100,50);
  
  drawSprites(); 
}
function Obstacle(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,327,10,10);
   obstacle.velocityX = -6;
   obstacle.scale = 0.1;
   obstacle.lifetime = 300;
   obstacle.addImage(obstaceImage);
}
 
}


function  food(){
if (frameCount % 80 === 0) {
    banana = createSprite(400,390,10,40);
    banana.addImage(bananaImage); 
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    banana.y = Math.round(random(120,200));
  
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
  
  }
}


