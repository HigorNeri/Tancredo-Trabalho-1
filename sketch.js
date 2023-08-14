function setup() {
  createCanvas(500, 500);
  background("purple");
}

function draw() {
  
  
  stroke("red");
  fill("pink");
 
  if(mouseIsPressed){
     rect(mouseX,mouseY,50,50);
  }
  
}