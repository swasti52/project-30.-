const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,600,1300,20);

  rope = new Rope(7,{x:600,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
  bunny=createSprite(600,500,100,100)

  fruit_con = new Link(rope,fruit);
  button=createImg("cut_button.png")
  button.position(600,30)
  button.size(50,50)
  button.mouseClicked(drop)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  bunny.addImage(rabbit)
  bunny.scale=0.2
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,windowWidth,windowHeight);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

 
   drawSprites()
}
function drop(){
rope.break()
fruit_con.detach()

}