var astronaut, bg;
var bath, brush, drink, eat, gym, iss, move, sleep;
var top, bottom, left, right;



function preload() {
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
  brush = loadImage("images/brush.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png");
  iss = loadImage("images/iss.png");
  move = loadAnimation("images/move.png", "images/move1.png", "images/move.png", "images/move1.png");
  sleep = loadImage("images/sleep.png");
  //drink = loadAnimation("images/drink1.png", "images/drink2.png");
}

function setup() {
  createCanvas(745,400);
  
  bg = createSprite(373,200);
  bg.addImage(iss);
  bg.scale = 0.15;

  left = createSprite(1,200,5,400);
  left.visible = false;
  right = createSprite(744,200,5,400);
  right.visible = false;
  top = createSprite(200,1,400,5);
  top.visible = false;
  bottom = createSprite(400,399,800,5);
  bottom.visible = false;

  astronaut = createSprite(400,200);
  astronaut.addImage(sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(255,255,0);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("up")) {
    astronaut.addImage("brushing", brush);
    astronaut.changeImage("brushing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("down")) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming")
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("right")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating")
    astronaut.velocityX = 2;
    astronaut.velocityY = -3;
  }
  if (keyDown("left")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing")
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("m")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  

  drawSprites();

  textSize(30);
  fill ("white");
  text("Use arrow keys and m to do the daily routine!", 100, 50);
}