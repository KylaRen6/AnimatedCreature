//variables
var pupilY = 283
var pupilX = 560
var f1Y = 615
var f2Y = 630
var f3Y = 625
var f4Y = 595
var Yspeed = 2
var Xspeed = 2

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(550,150,580);
  
  //legs
  strokeWeight (8)
  line(280,400,180,580)
  line(180,580,228,f1Y)
  fill(0,100,0)
  ellipse(180,580,30,30)
  
  line(350,400,310,610)
  line(310,610,363,f2Y)
  fill(0,160,0)
  ellipse(310,610,30,30)
  
  line(425,400,450,615)
  line(450,615,508,f3Y)
  fill(0,220,0)
  ellipse(450,615,30,30)

  line(510,400,580,600)
  line(580,600,635,f4Y)
  fill(0,280,0)
  ellipse(580,600,30,30)
  
  //tail
  line(205,390,140,315)
  fill(50,340,4200)
  ellipse(140,310,50,50)
  
  //wings
  fill(270,500,100)
  ellipse(420,270,200,200)
  ellipse(305,275,200,200)
  
  //body
  strokeWeight(3)
  fill(375,50,125)
  ellipse(400,400,400,200);
  
  //spots
  fill(135,50,300,100)
  ellipse(330,350,50,50)
  
  fill(300,100,300)
  ellipse(390,430,60,60)
  
  fill(0,150,175)
  ellipse(460,360,55,55)

  fill(250,15,20)
  ellipse(270,430,55,55)
  
  fill(0,300,255)
  ellipse(500,445,50,50)
  
  f1Y = f1Y + Yspeed
  f2Y = f2Y + Xspeed
  f3Y = f3Y + Yspeed
  f4Y = f4Y + Xspeed
  
  //head
  fill(50,500,75)
  rect(520,280,200,120,100);
  
  //eyes
  strokeWeight(5)
  fill(245)
  ellipse(565,275,80,80);
  fill(0)
  ellipse(pupilX,266,40,40); 
  fill(245)
  ellipse(680,275,80,80);
  fill(0)
  ellipse(684,pupilY,40,40);
  pupilY = pupilY+Yspeed
 
  if(pupilY > 292) {
    Yspeed= -Yspeed
  };
  if(pupilY<256){
    Yspeed=- Yspeed
  };
  pupilX = pupilX+Xspeed
  
  if(pupilX> 578){
    Xspeed=-Xspeed
  };
  if(pupilX<550){
    Xspeed=-Xspeed
  }
  
  
  //teeth
  strokeWeight(6)
  fill(245)
  triangle(565,348,582,365,600,348);
  triangle(600,348,618,365,635,348);
  triangle(635,348,652,365,670,348);

  
  
  
}