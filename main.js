function preload(){

}
function setup(){
createCanvas(600,480)
video = createCapture(VIDEO);
video.hide();
}
function draw(){
    background(125)

noStroke();
fill(30, 201, 252)    
circle(50,50,50)
noStroke();
fill(30, 201, 252)    
circle(550,430,50)
noStroke();
fill(30, 201, 252)    
circle(550,50,50)
noStroke();
fill(30, 201, 252)    
circle(50,430,50)
fill(255, 255, 255)
rect(75,25,450,50)
fill(255, 255, 255)
rect(75,406,450,50)
fill(255, 255, 255)
rect(25,75,50,329)
fill(255, 255, 255)
rect(525,75,50,329)
fill(250, 142, 227)
rect(75,75,450,50)
fill(250, 142, 227)
rect(75,356,450,50)
fill(250, 142, 227)
rect(75,75,50,329)
fill(250, 142, 227)
rect(475,75,50,329)
image(video,235,185,125,125)
}