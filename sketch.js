const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var particles,plinkos,divisions,divisionHeight;
var d1,d2,d3,d4,d5,d6,d7,d8;
var p1;

function preload(){

}

 


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,790,480,20);

  particles = [];
 plinkos = [];
 divisions = [];
 divisionHeight = 300;

 for(var k = 0; k <=width; k = k+80){
  divisions.push(new Division(k,100,10,100))
}

console.log(divisions)

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(20);  

  ground.display();

  
 
}
