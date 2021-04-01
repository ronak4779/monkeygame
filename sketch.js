
var monkey , monkey_running
var bananaImage, obstacle, obstacleImage
var banana;
var bananaGroup;
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime;
var score;
var obstacleGroup;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500, 550);

bananaGroup = createGroup();
obstacleGroup = createGroup();

  
monkey=createSprite(100,410,10,10);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.2;
  
ground=createSprite(400,505,900,10);
ground.x = ground.width/2;
console.log(ground.x);

  
survivalTime = 0;
score = 0;

  
  
}





function draw() {
background("white");
  
   
bananas();
obstacles();
  
monkey.collide(ground);
//obstacleGroup.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
     
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  


text("Survival Time:" + survivalTime,100,50);
stroke("black");
textSize(50);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
  
  


  

  
drawSprites();
}

function bananas (){
if(World.frameCount%80===0){
banana = createSprite(480,180,10,10);
banana.addImage(bananaImage);
banana.scale=0.2;
banana.velocityX=-12;
banana.y=Math.round(random(120,200));
bananaGroup.add(banana);
  
}  
  
}

function obstacles (){
if(World.frameCount%300===0){
obstacle = createSprite(400,460,10,40);
obstacle.velocityX = -6;
obstacle.addImage(obstacleImage);
obstacle.scale=0.2;
obstacleGroup.add(obstacle);
}
}



