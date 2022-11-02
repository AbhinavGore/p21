var ball 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;




	groundObj = new Ground(600, 650, 1200, 20)
	leftSide = new Ground(800, 600, 20, 120)
	rightSide = new Ground(950, 600, 20, 120)
	//Create the Bodies Here.
	var ball_option = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball=Bodies.circle(260,100,20,ball_option)
	World.add(world,ball)


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	groundObj.show()
	leftSide.show()
	rightSide.show()
	ellipse(ball.position.x,ball.position.y,40,40)
	drawSprites();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:65,y:-65})
	}
}


