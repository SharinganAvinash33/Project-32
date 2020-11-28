const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Engine=Matter.Engine;
const World=Matter.World;
var score=0;
function setup() {
  engine=Engine.create()
  world=engine.world
  var canvas=createCanvas(1366,695);

  plat1=new Ground(683,690,1366,10);
  plat2=new Ground(600,600,500,10);
  plat3=new Ground(1100,400,500,10);
  poly=new Polygon(300,347.5,50,50);
  slingshot1=new Slingshot(poly.body,{x:150,y:347.5})
  box1=new Box(560,590);
  box2=new Box(580,590);
  box3=new Box(600,590);
  box4=new Box(620,590);
  box5=new Box(640,590);
  box6=new Box(620,550);
  box7=new Box(580,550);
  box8=new Box(600,550);
  box9=new Box(600,510);
  box10=new Box(1080,355)
  box11=new Box(1060,355)
  box12=new Box(1100,355)
  box13=new Box(1120,355)
  box14=new Box(1140,355)
  box15=new Box(1120,315)
  box16=new Box(1100,315)
  box17=new Box(1080,315)
  box18=new Box(1100,275)
  
  Body.setMass(poly.body,30000)
  newFunction();

}

function draw() {
  Engine.update(engine)
  setBg();
    
  plat1.display();
  plat2.display();
  plat3.display();
  slingshot1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  poly.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
}

function newFunction() {
  textSize(20);
  fill("yellow");
  text("Score:" + score, 1000, 50);
}

function mouseDragged(){
	Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode===32){
    Body.setPosition(poly.body,{x:150,y:347.5});
    slingshot1.attach(poly.body,{x:150,y:347.5});
  }
}
async function setBg(){

  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
  var responseJson=await response.json();
  var dateTime=responseJson.datetime;
  var hour=dateTime.slice(11,13);
  if(hour>=6&&hour<19){
      background(255,255,255)
  
  }else{
      background(0)
  }
  
}


