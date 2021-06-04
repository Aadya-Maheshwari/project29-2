const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var polygon;
var sling;

function preload(){
  
}

function setup(){
    createCanvas(1600,400);

    engine=Engine.create();
    world=engine.world;

    ground = new Ground(200,200,100,30);
 
  //row1
    block1 = new Box(330,125,30,30);
    block2 = new Box(390,125,30,30);
    block3 = new Box(420,125,30,30);
    block4 = new Box(490,125,30,30);

  //row2
    block5 = new Box(360,155,30,30);
    block6 = new Box(390,155,30,30);
    block7 = new Box(420,155,30,30);

  //row3
    block8 = new Box(390,235,30,30);
    block9 = new Box(420,235,30,30);

  //row4
    block10 = new Box(400,335,30,30);

    polygon = new Polygon(100,250,70);

    sling = new SlingShot(polygon.body,{x:100,y:250});
}
function draw(){
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
}