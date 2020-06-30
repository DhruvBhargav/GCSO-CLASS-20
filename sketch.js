var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
speed = random(55,90);
weight = random(400,1500);
 car = createSprite(50, 200, 50, 50);
 car.shapeColor = 'white';
 wall = createSprite(1500, 200, 60, height/2);;
 //car.shapeColor = 'white';
car.velocityX = speed;
}

function draw() {
  background(0); 
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    var Deformation = 0.5*weight*speed*speed/22500;
    if(Deformation>180){
      car.shapeColor = 'red';
    }
      if(Deformation<180 && Deformation>100){
        car.shapeColor = 'yellow'
      }
        if(Deformation<100){
          car.shapeColor = 'green';
      }
  } 
  drawSprites();
}