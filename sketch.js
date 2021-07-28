const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var barbarian1;

function preload(){  
  bImg=loadAnimation("barbarians.png","barbarians 2.png","barbarians3.png","barbarians4.png","barbarians5.png","barbarians6.png","barbarians7.png");
}

function setup() {
  createCanvas(1200,800);
  
  engine= Engine.create();
  world=engine.world;

  barbarianGroup= new Group();
  
  Engine.run(engine);
}

function draw() {
  background(0);
  drawSprites();
  if(frameCount % 100===0){
    barbarian1=new Barbarian(10,random(100,700));
    barbarianGroup.add(barbarian1.body);
  }
}