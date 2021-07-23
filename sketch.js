const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base1, base2;
var bridge;
var jointPoint;
var stone;
var stones=[];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  //stone = new Stone(700, 100, 60);

  base1 = new Base(175, height-300, 350, 50);
  base2 = new Base(width-175, height-300, 350, 50);
  bridge = new Bridge(19, {x:270, y:height-300});
  jointPoint = new Base(width-350,height-300, 50, 50);
  Matter.Composite.add(bridge.body, base1);
  jointLink = new Link(bridge, jointPoint);

  for (var i=0; i<=8; i++){
    var x = random(width/2 - 200, width/2 + 200);
    var y = random(-10,140);
     stones[i] = new Stone(x, y, 80);
     //stones.push(stone);
    }
  
  
}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show();
  base1.show();
  base2.show();

  for (var i=0; i<=8; i++){
    stones[i].show();
    //stones[2].show();
  }
    


}
