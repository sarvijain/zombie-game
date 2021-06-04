//Game States
 var PLAY=1
 var END=2
 var STATE=0
 var gameState=STATE
 var kills=0;

var backgroundimg;
var Bullet;
var zombie1,zombie2,zombie3,zombie4,zombie5,zombie6;
function preload() {
  backgroundimg=loadImage("images/background3.jpg")
  backgroundimg2=loadImage("images/background.jpg")
  backgroundimg3=loadImage("images/background4.jpg")
  manimg=loadImage("images/man2.png");
  zombies1=loadImage("images/zombie.png");
  zombies2=loadImage("images/zombie2.png");
  zombies3=loadImage("images/zombie3.png");
  zombies4=loadImage("images/vampire1.png");
  zombies5=loadImage("images/scary.png");
  zombies6=loadImage("images/brain1.png");
  bulletimg=loadImage("images/bullet.png");
  gameoverimg=loadImage("images/gameover.png");
  pumpkinimg2=loadImage("images/pumpkin.png");
  thunderimg=loadImage("images/thunder.png");
  scarySound=loadSound("scary_sound.mp3");
  thunderSound=loadSound("thunder_sound_2.mp3");
  
}



function setup() {
  createCanvas(displayWidth, displayHeight-200);
  man=createSprite(150,displayHeight/2-10,50,50);
  man.addImage("man",manimg);
  man.scale=0.2;
  zg1 = new Group();
  zg2 = new Group();
  zg3 = new Group();
  zg4 = new Group();
  zg5 = new Group();
  zg6 = new Group();
 b1=new Group();
  // zg1.debug=true;
  // zg2.debug=true;
  
  // zg3.debug=true;
  
  // zg4.debug=true;
  
  // zg5.debug=true;
  // zg6.debug=true;
  man.debug=true;
  scarySound.loop();
}

function draw() {
  
  if(frameCount%5000<=1500){
    background(backgroundimg2);
  }
  else if( frameCount % 5000 > 1500 && frameCount % 5000 > 3200){
    background(backgroundimg);
  }
  else{
    background(backgroundimg3);
  }
  
  if(gameState===STATE){
    if(keyDown("s")){
      gameState=PLAY
    }
    strokeWeight(10)
    stroke("red")
    fill("white")
    textSize(30)
    text("Press  S  to start the game",displayWidth/2,displayHeight/2-100);
  }
  if(gameState===PLAY){
    
    if((frameCount%5000 < 1520 && frameCount%5000>1480) || (frameCount%5000>3000 && frameCount%5000 <3400) || (frameCount%5000> 4880 && frameCount%5000 < 80)){
      //thunderSound.play();
      image(thunderimg,Math.round(random(0,displayWidth-100)),Math.round(random(0,displayHeight/2)))
      
      image(pumpkinimg2,Math.round(random(0,displayWidth-100)),Math.round(random(0,displayHeight/2)))

   }
    var rand=Math.round(random(1,6))
    switch(rand){
   
     case 1: spwanZombie1();
          break;
     case 2: spwanZombie2();
          break;  
     case 3: spwanZombie3();
          break;
     case 4: spwanZombie4();
          break;   
     case 5: spwanZombie5();
          break;  
     case 6: spwanZombie6();
          break;    
   }
   man.y=mouseY

   if(keyWentDown("SPACE")){
    bullets();
   }
   if(b1.isTouching(zg1)){
    b1.destroyEach ();
    zg1.destroyEach();
    kills=kills+10;
   }
   if(b1.isTouching(zg2)){
     b1.destroyEach ();
     zg2.destroyEach();
     kills=kills+5;
   }
   if(b1.isTouching(zg3)){
     b1.destroyEach ();
     zg3.destroyEach();
     kills=kills+20
   }
   if(b1.isTouching(zg4)){
     b1.destroyEach ();
     zg4.destroyEach();
     kills=kills+2
   }
   if(b1.isTouching(zg5)){
     b1.destroyEach ();
     zg5.destroyEach();
     kills=kills+10
   }
   if(b1.isTouching(zg6)){
     b1.destroyEach ();
     zg6.destroyEach();
     kills=kills+5
   }
   if(zg1.isTouching(man)||zg2.isTouching(man)||zg3.isTouching(man)
    ||zg4.isTouching(man)||zg5.isTouching(man)||zg6.isTouching(man)){
    gameState=END;
    }
  }
  if(gameState===END){
    zg1.setVelocityXEach(0);
    zg2.setVelocityXEach(0);
    zg3.setVelocityXEach(0);
    zg4.setVelocityXEach(0);
    zg5.setVelocityXEach(0);
    zg6.setVelocityXEach(0);
    b1.destroyEach();
   image(gameoverimg,displayWidth/2-100,100) 
  }
  strokeWeight(10)
  stroke("blue")
  fill("white")
  textSize(40);
  text("Kill : "+ kills,displayWidth/2,40)
  
  edges=createEdgeSprites();
  
 // man.x=mouseX
 
 
 
  man.collide(edges)
 
  
  drawSprites(); 

}
function spwanZombie1(){
  if(frameCount%200 == 0){
    zombie1=createSprite(displayWidth,200,20,20);
    zombie1.addImage("ghost1",zombies1);
    zombie1.scale=0.2
    zombie1.velocityX=-(5+kills*0.01);
    zombie1.y = Math.round(random(displayHeight/2-200,displayHeight-300))

    zombie1.lifetime=width/zombie1.velocityX
    zg1.add(zombie1);
    
  }
}
function bullets(){
  Bullet=createSprite(200,300,50,50);
  Bullet.addImage("bullet",bulletimg);
  Bullet.scale=0.06;
  Bullet.velocityX=4.5
  Bullet.x=man.x+190
  Bullet.y=man.y-95
  Bullet.lifetime=width/Bullet.velocityX;+
  b1.add(Bullet);

}
function spwanZombie2(){
  if(frameCount%200 == 0){
    zombie2=createSprite(displayWidth,200,20,20);
    zombie2.addImage("ghost2",zombies2);
    zombie2.scale=0.1
    zombie2.velocityX=-(5+kills*0.01);
   zombie2.y = Math.round(random(displayHeight/2-200,displayHeight-300))
   
   zombie2.lifetime=width/zombie2.velocityX
   zg2.add(zombie2);
  }
}
function spwanZombie3(){
  if(frameCount%200 == 0){
    zombie3=createSprite(displayWidth,200,20,20);
    zombie3.addImage("ghost3",zombies3);
    zombie3.scale=0.1
    
    zombie3.velocityX=-(4+kills*0.01);;
   zombie3.y = Math.round(random(displayHeight/2-200,displayHeight-300))
   
   zombie3.lifetime=width/zombie3.velocityX;
   zg3.add(zombie3);
  }
}
function spwanZombie4(){
  if(frameCount%200 == 0){
    zombie4=createSprite(displayWidth,200,20,20);
    zombie4.addImage("ghost4",zombies4);
    zombie4.scale=0.17
    
    zombie4.velocityX=-(4+kills*0.01);;
   zombie4.y = Math.round(random(displayHeight/2-200,displayHeight-300))
   
   zombie4.lifetime=width/zombie4.velocityX;
   zg4.add(zombie4);
  }
}
function spwanZombie5(){
  if(frameCount%200 == 0){
    zombie5=createSprite(displayWidth,200,20,20);
    zombie5.addImage("ghost5",zombies5);
    zombie5.scale=0.4
    
    zombie5.velocityX=-(5+kills*0.01);;
   zombie5.y = Math.round(random(displayHeight/2-200,displayHeight-300))
   
   zombie5.lifetime=width/zombie5.velocityX
   zg5.add(zombie5);
  }
}
function spwanZombie6(){
  if(frameCount%200 == 0){
    zombie6=createSprite(displayWidth,200,20,20);
    zombie6.addImage("ghost6",zombies6);
    zombie6.scale=0.3
    
    zombie6.velocityX=-(6+kills*0.01);;
   zombie6.y = Math.round(random(displayHeight/2-200,displayHeight-300))
   
   zombie6.lifetime=width/zombie6.velocityX
   zg6.add(zombie6);
  }
}

