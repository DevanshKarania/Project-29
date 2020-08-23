const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground,ground2;
var sling;
var ball,hexagonimg;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;

function preload(){
  hexagonimg = loadImage("hexagon.png");
}


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  ground = new Ground(400,400,800,20);
  ground2 = new Ground(390,305,230,20);

 
 b1 = new Box(300,275,30,40);
 b2 = new Box(330,275,30,40);
 b3 = new Box(360,275,30,40);
 b4 = new Box(390,275,30,40);
 b5 = new Box(420,275,30,40);
 b6 = new Box(450,275,30,40);
 b7 = new Box(480,275,30,40);
 b8 = new Box(330,235,30,40);
 b9 = new Box(360,235,30,40);
 b10 = new Box(390,235,30,40);
 b11 = new Box(420,235,30,40);
 b12 = new Box(450,235,30,40);
 b13 = new Box(360,195,30,40);
 b14 = new Box(390,195,30,40);
 b15 = new Box(420,195,30,40);
 b16 = new Box(390,155,30,40);

 ball = Bodies.circle(50,200,20);
 World.add(world,ball);

sling = new Slingshot(this.ball,{x:100,y:200});

 

}

function draw() {
  background("black");  

  ground.display();
  ground2.display();

 

 fill("lightblue")
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 fill("blue");
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 b12.display();
 fill("red");
 b13.display();
 b14.display();
 b15.display();
 fill("green");
 b16.display();

 imageMode(CENTER);
 image(hexagonimg,ball.position.x,ball.position.y,40,40);

 sling.display();



  drawSprites();
}
function mouseDragged(){
  
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();

}
