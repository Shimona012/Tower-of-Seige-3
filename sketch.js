const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//var gameState = "onSling";
var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;

var ground1, ground2, ground3;
var score=0;
var block15, block16, block17, block18, block19, block20, block21;
var block22;
var slingshot;

var polygon;
var g;
var bg="photo.jpg",backgroundImg;
var img;

function preload(){
  bggettime();
  img = loadImage("polygon.png");

}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
    world = engine.world;

g=new Ground(600,400,1300,20);
  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);



  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);



  bolck10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);


  block13 = new Block(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10);


  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);
// maam is it ok if i dont include the mouse only dragged with sling an
// try remove the game states. ok maa
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  //image(img,0,0);

  slingshot = new SlingShot(this.polygon,{x:150, y:160});

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  //background("grey");
  noStroke();
    textSize(35);
    fill(255);
    text("Score:"+score,width-300,50);
  Engine.update(engine);

  fill(rgb(135, 205, 236));

  block1.display();
  block1.Score();
  block2.display();
  block2.Score();
  block3.display();
  block3.Score();
  block4.display();
  block4.Score();
  block5.display();
  block5.Score();
  fill("lightBlue");
  block6.display();
  block6.Score();
  block7.display();
  block7.Score();
  block8.display();
  block8.Score();
  block9.display();
  block9.Score();

  fill("lightPink");
  bolck10.display();
  bolck10.Score();
  block11.display();
  block11.Score();
  block12.display();
  block12.Score();
  fill(rgb(47, 48, 48));

  block13.display();
block13.Score();

  fill(rgb(135, 205, 236));
  block14.display();
  block14.Score();
  block15.display();
  block15.Score();
  block16.display();
  block16.Score();
  block17.display();
  block17.Score();
  block18.display();
  block18.Score();
  fill(rgb(63, 224, 208));

  block19.display();
  block19.Score();
  block20.display();
  block20.Score();
  block21.display();
  block21.Score();
  fill(rgb(0,255,0));

  block22.display();
  block22.Score();
  ground1.display();
  ground2.display();
  ground3.display();


g.display();

  fill("gold");
  imageMode(CENTER);
  image(img,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();

  textSize(25);
  text("Hit the blocks",600,350);

  textSize(35);
  fill(rgb(62, 242, 224));
  stroke(rgb(223, 167, 249));
  strokeWeight(40);
  text("Tower Of Siege 3!",500,50);
}

function mouseDragged(){

  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		slingshot.attach(this.polygon);
	}
}

async function bggettime(){
  var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsetype= await response.json();
  var datetime= responsetype.datetime;
  console.log(datetime);
  var hour=datetime.slice(11,13);
  console.log(hour);

  if(hour>=6 && hour<=18)
{
    bg="images.jpg"
}
else{
    bg="photo.jpg"
}
backgroundImg=loadImage(bg);
console.log(backgroundImg);
}
