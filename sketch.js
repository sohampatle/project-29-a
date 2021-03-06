const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1,stand2,ball;
var block1,block2,block3,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var polygon, slingShot;
var engine;
var polygon;
function preload(){
polygon = loadImage("polygon.png")
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,390,1200,20);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  block1 = new Box(300, 275, 30, 40);
  block2 = new Box(330, 275, 30, 40);
  block3 = new Box(360, 275, 30, 40);
  block4 = new Box(390, 275, 30, 40);
  block5 = new Box(420, 275, 30, 40);
  block6 = new Box(450, 275, 30, 40);
  block7 = new Box(480, 275, 30, 40);

  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);

  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);

  block16 = new Box(640,175,30,40);
  block17 = new Box(670,175,30,40);
  block18 = new Box(700,175,30,40);
  block19 = new Box(730,175,30,40);
  block20 = new Box(760,175,30,40);

  block21 = new Box(670,135,30,40);
  block22 = new Box(700,135,30,40);
  block23 = new Box(730,135,30,40);

  block24 = new Box(700,95,30,40);



  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball, {x:100,y:200});
}

function draw() {
  background(255,255,255); 
 // Engine.update(engine);
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block17.display();
  block18.display();
  block19.display(); 
  block16.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
 
 // block1.display();
  stand1.display();
  stand2.display();
  slingShot.display();
  imageMode(CENTER)
  image(polygon,ball.position.x,ball.position.y,40,40)
  

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}