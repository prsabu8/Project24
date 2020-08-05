
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1, bin2, bin3;
var ball;


function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");
	
	ball = new Paper(width/20, height-55);
	
	World.add(world,ball);

	bin1 = new Bin(width/1.3, height-50, 200, 20);
    bin2 = new Bin(height-170, width/1.36, 20, 100);
	bin3 = new Bin(height-1, width/1.36, 20, 100);

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(0);

  bin1.display();
  bin2.display();
  bin3.display();

  ball.display();
  
  keyPressed();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	 }
   }