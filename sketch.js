const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
    
}

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;
    

    bob1=new Bob(300,350,50);
    bob2=new Bob(350,350,50);
    bob3=new Bob(400,350,50);
    bob4=new Bob(450,350,50);
    bob5=new Bob(500,350,50);
    bar= new Bar (400,100,300,40);

    string1= new String(bob1.body,bar.body,-50*2,0);
    string2= new String(bob2.body,bar.body,-25*2,0);
    string3= new String(bob3.body,bar.body,-0*2,0);
    string4= new String(bob4.body,bar.body,25*2,0);
    string5= new String(bob5.body,bar.body,50*2,0);
    
    


    //Create the Bodies Here.


    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bar.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
  
 
}

