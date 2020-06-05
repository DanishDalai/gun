var gun
var target
var mouse

function preload(){
 
  gun_hand = loadImage("gun.png")
  target_rest = loadImage("target.png")
  
  shootingSound = loadSound("pew.mp3")
  
}

function setup() {
  createCanvas(400, 400);
  
    target = createSprite(200,150)
  target.addImage("stillTarget",target_rest)
  target.scale = 0.2
  
  gun = createSprite(mouseX,mouseY,25,25)
  gun.addImage("stillGun",gun_hand)
  gun.scale = 0.1
 
    if(keyDown("space")){
     shootingSound.play();
     }

}

function draw() {
  background(220);
    
  if(keyDown("enter")){
     shootingSound.play();
     }
  //gun = createSprite(mouseX,mouseY,25,25)
  gun.addImage("stillGun",gun_hand)
  gun.scale = 0.1
  gun.x = mouseX
  gun.y = mouseY

  
  drawSprites();

}

