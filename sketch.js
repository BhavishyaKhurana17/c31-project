const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var divisons = [];
var divisonsHeight = 300;
var particles = [];
var plinkos = []; 
var line;
var gameState = "PLAY";
var count = 0;
var score = 0;



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);

  
  for (var i = 0; i<=width; i= i+80) {
      divisons.push(new Division(i,height-divisonsHeight/2, 10, divisonsHeight));
  }

  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(35)
  text("Score : "+score,20,40);
  fill(255);
  
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  
  drawSprites();

  
  
  for (var n = 0; n<divisons.length; n++) {
    divisons[n].display();
  }

  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<particles.length; h++) {
    particles[h].display();
  }

  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }


  ground.display();
  if ( gameState =="END") {
    background("black");
    fill("red");
    textSize(100);
    text("Game Over", 200, 400);
   
  } 
  for(var k = 0; k < plinkos.length; k++) {
   plinkos[k].display();
}

if(particle!=null)
{
   particle.display();
    
    if (particle.body.position.y>700)
    {
          if (particle.body.position.x < 300) 
          {
              score=score+500;      
              particle=null;
              if ( count>= 5) gameState ="END";                          
          }


          else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
          {
                score = score + 100;
                particle=null;
                if ( count>= 5) gameState ="END";

          }
          else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
          {
                score = score + 200;
                particle=null;
                if ( count>= 5)  gameState ="END";

          }      
          
    }
}





for (var i = 0; i < divisions.length; i++) {
 
divisions[i].display();
}

}


function mousePressed() {
if(gameState === "END") {
    count++;
particle = new Particle(mouseX, 50, 10, 10);
}
}


 




