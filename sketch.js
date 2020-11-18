const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Body       = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1, left, right;
var score = 0;
var count = 0;
var gameState = "play";
var state = "true";
var chancesLeft = 5;

var divisionHeight = 300;

var particle1 = null;
var plinkos   = [];
var divisions = [];

var screen;

var width  = 800;
var height = 800;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world  = engine.world;

  screen = createSprite(0,0,width*2,2*height);
  screen.visible=false;

  ground1 = new ground(width/2,800,width,30);
  left    = new ground(width-width,height/2,1,height);
  right   = new ground(width,height/2,1,height);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new division(k, height-300/2, 10, divisionHeight));
  }

  for (var j=38; j <= width-10; j=j+50) {
    plinkos.push(new plinko(j,75));
  }
  for (var j=13; j <= width-10; j=j+50) {
    plinkos.push(new plinko(j,175));
  }
  for (var j=38; j <= width-10; j=j+50) {
    plinkos.push(new plinko(j,275));
  }
  for (var j=13; j <= width-10; j=j+50) {
    plinkos.push(new plinko(j,375));
  }

}

function draw() {

  //console.log(mouseX);
  //console.log(mouseY);
  
  background(0,0,0);
  Engine.update(engine);

  if(mousePressedOver(screen) && count<5 && gameState!=="end" && state=="true") {
    particle1 = new particle(random(mouseX-10,mouseX+10), -10);
    chancesLeft-=1;
    count++;
    state="false";
  }
  
  if(particle1!==null) {
    particle1.display();

    if(particle1.body.position.y>760) {
      state="true";
      if(0<particle1.body.position.x && particle1.body.position.x<80) {
        score = score + 0;
        particle1 = null;
        if(count==5 || chancesLeft==0) {
          gameState="end";
        }
      }
      else if(80<particle1.body.position.x && particle1.body.position.x<160) {
        score = score + 400;
        particle1 = null;
        if(count==5 || chancesLeft==0) {
          gameState="end";
        }
      }
      else if(160<particle1.body.position.x && particle1.body.position.x<240) {
        score = score + 100;
        particle1 = null;
        if(count==5 || chancesLeft==0) {
          gameState="end";
        }
      }
      else if(240<particle1.body.position.x && particle1.body.position.x<320) {
        score = score + 200;
        particle1 = null;
        if(count==5 || chancesLeft==0) {
          gameState="end";
        }
      }
      else if(320<particle1.body.position.x && particle1.body.position.x<400) {
        score = score + 0;
        particle1 = null;
        if(count==5 || chancesLeft==0) {
          gameState="end";
        }
      }
      else if(400<particle1.body.position.x && particle1.body.position.x<480) {
        score = score + 500;
        particle1 = null;
        if(count==5 || chancesLeft==0) {
          gameState="end";
        }
      }
      else if(480<particle1.body.position.x && particle1.body.position.x<560) {
        score = score + 50;
        particle1 = null;
        if(count==5 || chancesLeft==0) {
          gameState="end";
        }
      }
      else if(560<particle1.body.position.x && particle1.body.position.x<640) {
        score = score + 150;
        particle1 = null;
        if(count==5 || chancesLeft==0) {
          gameState="end";
        }
      }
      else if(640<particle1.body.position.x && particle1.body.position.x<720) {
        score = score + 0;
        particle1 = null;
        if(count==5 || chancesLeft==0) {
          gameState="end";
        }
      }
      else if(720<particle1.body.position.x && particle1.body.position.x<800) {
        score = score + 300;
        particle1 = null;
        if(count==5 || chancesLeft==0) {
          gameState="end";
        }
      }
    }
  }

  if(gameState !== "end") {
  for (var k=0; k<divisions.length; k++) {
    divisions[k].display();
  }
  for (var i=0; i<plinkos.length; i++) {
    plinkos[i].display();
  }
  ground1.display();

  textSize(15);text("Chances Left: "+chancesLeft,680,20);
  textSize(30);text("Score: "+score,10,40);
  texts();
}
if(gameState=="end") {
   textSize(70);fill("white");text(score+" and",300,325);
  textSize(150);fill("white");text( "Game Over",005,475);

  textSize(15);fill("white");text("Press R to Retry",660,20);
  if(keyDown("r") || keyDown("R")) {
    reset();
    gameState="play";
  }
}

  drawSprites();

}
function texts() {
  textSize(35);text("0",31,550);        //0 Points
  textSize(35);text("400",91,550);    //400 Points
  textSize(35);text("100",170,550);   //100 Points
  textSize(35);text("200",251,550);   //200 Points
  textSize(35);text("0",350,550);       //0 Points
  textSize(35);text("500",411,550);   //500 Points
  textSize(35);text("50",500,550);     //50 Points
  textSize(35);text("150",570,550);   //150 Points
  textSize(35);text("0",670,550);       //0 Points
  textSize(35);text("300",731,550);   //300 Points
}
function reset() {
  chancesLeft=5;
  count=0;
  score=0;
}