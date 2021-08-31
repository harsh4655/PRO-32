const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world
var block1 , polygon
var score = 0
var dayImg
function preload(){
  dayImg = loadImage ("download.jpg")
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(585,310,300,15);
 
 ground1 = new Ground(600,700,1200,25);
 
  polygon = new Polygon(100,200,35,35);
  shooter = new SlingShot(polygon.body,{x:200,y:200});

   //level 1
  
  block1 = new block(500,279,30,40)
  block2 = new block(530,279,30,40)
  block3 = new block(560,279,30,40)
  block4 = new block(590,279,30,40)
  block5 = new block(620,279,30,40)
  block6 = new block(650,279,30,40)
  block7 = new block(680,279,30,40)
  //level 2
 
  block8 = new block(530,240,30,40)
  block9 = new block(560,240,30,40)
  block10 =new block(590,240,30,40)
  block11= new block(620,240,30,40)
  block12 =new block(650,240,30,40)

  //level 3

  block13 =new block(560,200,30,40)
  block14= new block(590,200,30,40)
  block15 =new block(620,190,30,40)
  //top
  block16= new block(590,150,30,40)
 
  
  
}

function draw() {
 
 Engine.update(engine)
  background(dayImg);  
  ground.display();
  ground1.display();  
  polygon.display();
  shooter.display();
  block1.display();  
  block2.display();  
  block3.display();  
  block4.display();  
  block5.display();  
  block6.display();  
  block7.display();  
  block8.display();  
  block9.display();  
  block10.display(); 
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display(); 

  block1.score()
  block2.score()
  block3.score()
  block4.score()
  block5.score()
  block6.score()
  block7.score()
  block8.score()
  block9.score()
  block10.score()
  block11.score()
  block12.score()
  block13.score()
  block14.score()
  block15.score()
  block16.score()
  
  textSize( 35)
  text("score " + score,500,100)
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  shooter.fly();
}

function keyPressed(){
  if(keyCode===32){
  shooter.attach(polygon.body);
  }
}
async function getBackground(){ 
  var apiResponse= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  console.log(apiResponse)
  var jsonData = await apiResponse.json()
  console.log(jsonData)
  var date=jsonData.datetime
  console.log(date)
  var time=date.slice(11,13)
 console.log(time)
 if (time>06 & time<15){
     backgroundImg =  loadImage("night.jpg");
 }else{
  backgroundImg =  loadImage("download.jpg");
 }

}