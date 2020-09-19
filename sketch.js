const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var log1,log2;
var bird1;
var pig;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    log1 = new Log(800,260,300,PI/2);
    log2 = new Log(700,230,250,PI/7);
    bird1 = new Bird(100,100);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(log1.body.pos.x);
    box1.display();
    box2.display();
    log1.display();
    log2.display();
    bird1.display();
    ground.display();
}