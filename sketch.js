var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	

	
	groundObj=new Ground(400,650,800,20)
	leftSide=new Ground (1100,600,20,120)
	//Create the Bodies Here.
	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
}



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show()
  drawSprites();
 
}



