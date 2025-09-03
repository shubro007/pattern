

let f;
let flowers = [];
let num = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 
  
  for (let i=0; i<num; i++){
    flowers[i] = new Flower(100,140-i*10,15,9,(1+i)*0.1);
  }
}

function draw() {
  background(0);  
  translate(width/2, height/2);
  
  for (let i=0; i<num; i++){
    flowers[i].display();
  }
}
