//Global Variables      
var playerrunner,ground,BananaGroup,ObstaclesGroup,food;
var stone,player,backgr,Survivaltime,invisiblegr;


var score = 0;

function preload(){
  backimage = loadImage("jungle.jpg");
Playerrunner=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_08.png","Monkey_10.png");
banana = loadImage("Banana.png");
stone_img =loadImage("stone.png");   

}


function setup() {
  createCanvas(600,300);

backgr = createSprite(0,0,600,300);
backgr.addAnimation("backgr1",backimage)
backgr.x = backgr.width/2;
backgr.velocityX = -4;

player = createSprite(100,200,20,10);
player.addAnimation("player",Playerrunner);
player.scale = 0.1;

invisiblegr = createSprite(200,230,600,10);
invisiblegr.visible = false; 
  
ground = createSprite(400,365,800,10);
ground.velocityX = -4;
ground.x = ground.width/2;



  BananaGroup = new Group();
  ObstaclesGroup = new Group();

score = 0;

stroke("black");
textSize(15); 
 fill("red"); 
}


function draw(){
 background(255); 
Survivaltime = Math.ceil(World.frameCount/World.frameRate);
  
  if (backgr.x < 0) {
  backgr.x = backgr.width/2;
  }
if(ground.x < 100){
   ground.x = ground.width/2;
}

if (keyDown("space") && player.y > 150) {
    player.velocityY = -8;
}

  player.velocityY= player.velocityY + 0.5;  

  player.collide(invisiblegr); 
  
if (ObstaclesGroup.isTouching(player)) {
   player.scale = 0.08;
  }
  
 switch(score){
  case 10: player.scale = 0.12;
            break;
  case 20 : player.scale = 0.14;
              break;
  case 30 : player.scale = 0.16;
             break;
  case 40 : player.scale = 0.18;
             break;
   default : break;          
 }  
  if (player.isTouching(BananaGroup)) 
  {
   BananaGroup.destroyEach();
   score = score + 2;
  }
  
   if (World.frameCount%100 ===0) 
   {
   var food = createSprite(900,150,20,20);
   food.addAnimation("food",banana);
   food.y = Math.round(random(100,150));
   food.velocityX = -4;
   food.scale = 0.05;
   //food.lifetime = 100;
   BananaGroup.add(food);
  }

  if(World.frameCount % 300 === 0) 
  {
  var stone = createSprite(900,200,20,10);
  stone.velocityX = - (6 + Survivaltime/100);
  stone.addAnimation("Stone",stone_img);
  stone.scale = 0.15;
  
  ObstaclesGroup.add(stone);
  }
  
drawSprites();
text("Score  - " + score,450,50);
}
 
  
  

