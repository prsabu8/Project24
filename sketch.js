
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1, bin2, bin3;
var paperObject;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");
	
	var option = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}
	
	paperObject = Bodies.circle(200,100,20,option);
	
	World.add(world,ball);

	bin1 = new Bin(width/1.5, height-50, 200, 20);
    bin2 = new Bin(height-265, width/1.36, 20, 100);
	bin3 = new Bin(height-70, width/1.36, 20, 100);


	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bin1.display();
  bin2.display();
  bin3.display();

  ellipseMode(CENTER);
  ellipse(width/9, height-50,20,20);
  
  drawSprites();
 
}

