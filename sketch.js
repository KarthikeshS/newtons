
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;
var string1,string2,string3,string4,string5;
var wood;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wood = createSprite(400,200,600,20);
	string1 = new String (300,200,10,400);
	string2 = new String (400,200,10,400);
	string3 = new String (500,200,10,400);
	string4 = new String (600,200,10,400);
	string5 = new String (700,200,10,400);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  
  drawSprites();
 
}



