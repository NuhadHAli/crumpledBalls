
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paperBall, db1, db2, db3;

function preload() {
 dustbinImage = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width / 2, 600, 800, 20, { isStatic: true });
	World.add(world, ground);

	paperBall = new Paper(100, 100, 30)
	db1 = new Dustbin(650, 580, 150, 20)
	db2 = new Dustbin(570, 500, 20, 160)
	db3 = new Dustbin(730, 500, 20, 160)


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);


	paperBall.display();
	db1.display();
	db2.display();
	db3.display();

	fill(255);
	rect(ground.position.x, ground.position.y, 800, 20);
imageMode(CENTER)
	image(dustbinImage, 650, 500, 190, 200)


}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Body.applyForce(paperBall.body, paperBall.body.position, { x: 60, y: -60 })
  
	}
}





