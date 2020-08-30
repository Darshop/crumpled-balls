
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var options={
isStatic=false,
restitution:0.3,
friction:0.5,
density:1.2
}	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dusbinSprite=createSprite(width/2, 80, 10,10);
	dusbinSprite.addImage(dustbinIMG)
	dusbinSprite.scale=0.2

	Engine.run(engine);
  
	box1= Bodies.rectangle(width/2,635,200,20,{isStatic:true})
	World.add(world,box1)
  box1sprite=createSprite(width/2,650,200,20)
  box1sprite.shapeColor="red"
  
  box2= Bodies.rectangle(310,590,20,100,{isStatic:true})
  World.add(world,box2)
  box2sprite=createSprite(310,590,20,100)
  box2sprite.shapeColor="red"
  }
  
  box3= Bodies.rectangle(310,590,20,100,{isStatic:true})
  World.add(world,box3)
  box3sprite=createSprite(310,590,20,100)
  box3sprite.shapeColor="red"



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
 function keyPressed(){
 if(keyCode===UP_ARROW){
 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
 }
 }


