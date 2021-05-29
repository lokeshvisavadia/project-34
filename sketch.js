const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg,superImg,ball,block1,block2,block3;
var ground,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var slingshot,ground2,monImg,mon;

function preload() {
  backgroundImg=loadImage("Background.png");
superImg=loadImage("Superhero.png");
monImg=loadImage("Monster.png");
}

function setup() {
  createCanvas(900, 600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

ground = new Ground(230,465,485,20);
ground2 = new Ground(550,322,160,20);
//ground2.visible = false;

block1 = new Block(270,275,30,70);
 // console.log(block1);
  block2 = new Block(300,275,30,70);
  block3 = new Block(330,275,30,70);
  block4 = new Block(360,275,30,70);
  block5 = new Block(390,275,30,70);
  block6 = new Block(420,275,30,70);
  block7 = new Block(450,275,30,70);
  //level two
  block8 = new Block(300,235,30,70);
  block9 = new Block(330,235,30,70);
  block10 = new Block(360,235,30,70);
  block11 = new Block(390,235,30,70);
  block12 = new Block(420,235,30,70);
  //level three
  block13 = new Block(330,195,30,70);
  block14 = new Block(360,195,30,70);
  block15 = new Block(390,195,30,70);
  //top
block16 = new Block(450,235,30,70);
//middle line
block17=new Block(270,235,30,70);
block18=new Block(300,190,30,70);
block19=new Block(420,190,30,70);
block20=new Block(330,100,30,70);
block21=new Block(360,100,30,70);
block22=new Block(390,100,30,70);
block23=new Block(330,55,30,70);
block24=new Block(360,55,30,70);
block25=new Block(390,55,30,70);
block26=new Block(360,5,30,70);
ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  mon=Bodies.circle(550,230,20)
  World.add(world,mon);
  slingshot = new SlingShot(ball,{x:100,y:200});

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  text(mouseX + ',' + mouseY,200,500,30,30);
  fill("red");
ground.display();
fill("skyblue");
ground2.display();
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
block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
block24.display();
  block25.display();
  block26.display();

  //imageMode(CENTER)
  image(superImg ,ball.position.x,ball.position.y,90,90);
  image(monImg,mon.position.x,mon.position.y,200,200);
  slingshot.display();


}

function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}