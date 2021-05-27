const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var polygon, ground, slingShot;

function preload(){
    
}

function setup(){
   createCanvas(800,800);
    
   //level one
   block1 = new Block(300,275,30,40);
   block1.shapeColor = "blue";
   block2 = new Block(330,275,30,40);
   block2.shapeColor = "blue";
   block3 = new Block(360,275,30,40);
   block3.shapeColor = "blue";
   block4 = new Block(390,275,30,40);
   block4.shapeColor = "blue";
   block5 = new Block(420,275,30,40);
   block5.shapeColor = "blue";
   block6 = new Block(450,275,30,40);
   block6.shapeColor = "blue";
   block7 = new Block(480,275,30,40);
   block7.shapeColor = "blue";

   //level two
   block8 = new Block(330,235,30,40);
   block8.shapeColor = "pink";
   block9 = new Block(360,235,30,40);
   block9.shapeColor = "pink";
   block10 = new Block(390,235,30,40);
   block10.shapeColor = "pink";
   block11 = new Block(420,235,30,40);
   block11.shapeColor = "pink";
   block12 = new Block(450,235,30,40);
   block12.shapeColor = "pink";

   //level three
   block13 = new Block(360,195,30,40);
   block13.shapeColor = "cyan";
   block14 = new Block(390,195,30,40);
   block14.shapeColor = "cyan";
   block15 = new Block(420,195,30,40);
   block15.shapeColor = "cyan";

   //top
   block16 = new Block(390,155,30,40);
   block16.shapeColor = "grey";

   //polygon holder with slings
   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);

   slingShot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw(){
    background("black");



    drawSprites();
} 
