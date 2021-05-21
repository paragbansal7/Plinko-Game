const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var particles,plinkos,divisions,divisionHeight;
var k;

function preload(){

}

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  // creating Ground
  ground = new Ground(240,790,480,20);


  // creating Arrays
  particles = [];
  plinkos = [];
  divisions = [];
  divisionHeight = 300;

  // creating Divisions
  for( k = 0; k <=width; k = k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  // creating plinkos
  // row 1
  for( k = 5; k<=width; k=k+50){
   plinkos.push(new Plinko(k,75))
 }

  // row 2
  for( k = 40; k<=width; k=k+50){
  plinkos.push(new Plinko(k,125))
  }

  // row 3
  for( k = 15; k<=width; k=k+50){
  plinkos.push(new Plinko(k,175))
  }

  // row 4
  for( k = 30; k<=width; k=k+50){
    plinkos.push(new Plinko(k,225))
    }

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(30);  

  // displaying Ground
  ground.display();

  // displaying Divisions
  for(k = 0; k<divisions.length; k++){
    divisions[k].display()
  }

  // displaying plinkos
  for(k = 0; k<plinkos.length; k++){
    plinkos[k].display()
  }

  // creating particles
  if(frameCount%60===0){
    particles.push(new Particle(random(width/4-10,width/4+10),10,10))
  }
  // displaying particles
  for(k = 0; k<particles.length; k++){
    particles[k].display()
  }
  
 
}