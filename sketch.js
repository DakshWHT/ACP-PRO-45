var background_img, player_img, playershooting_img
var player

function preload(){
  background_img = loadImage("assets/back2.jpeg");
  player_img = loadImage("assets/3.png");
  playershooting_img  = loadImage("assets/3-gun.png");
}

function setup(){
  createCanvas(1100, 600);
  player = createSprite(100, 500, 5, 5);
  player.addImage(player_img);
  player.scale = 0.4
}

function draw(){
  background(background_img);


  if(keyDown("UP_ARROW")){
    player.y -= 5
    player.scale -= 0.002
  }
  if(keyDown("DOWN_ARROW")){
    player.y += 5
    player.scale += 0.002
  }
  if(keyDown("RIGHT_ARROW")){
    player.x += 5
  }
  if(keyDown("LEFT_ARROW")){
    player.x -= 5
  }
  if(keyWentDown("SPACE")){
    player.addImage(playershooting_img);
  }
  if(keyWentUp("SPACE")){
    player.addImage(player_img);
  }

  drawSprites();
}