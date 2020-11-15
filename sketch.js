var bullet,speed,weight;
var wall,thickness;
var wallLeftEdge;
var bulletRightEdge;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,80,40);
  bullet.shapeColor=color(255,123,0);
  bullet.velocityX=17;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(0,0,255);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,32);
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor=color(245,0,0);
    }
    else if(damage<10){
      wall.shapeColor=color(0,245,0);
    }
  }

  bullet.display();
  wall.display();

  drawSprites();
}
