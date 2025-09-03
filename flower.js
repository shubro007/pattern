



class Flower{
    constructor(pts, r, f_amp, period, speed){
        this.x = [];
        this.y = [];
        this.pts = pts;
        this.r = r;
        this.f_radius;
        this.f_amp = f_amp;
        this.period = period;  
        this.rot = 0; 
        this.speed = speed;
    }

    display(){
        push();
    blendMode(DIFFERENCE)
  noStroke();
  fill(255);
  beginShape();
  for (let i = 0; i < this.pts; i++) {
    let angle = i/this.pts * 360;
    this.f_radius = this.f_amp*cos(angle*this.period);
    this.x[i] = (this.r+this.f_radius)*cos(angle+this.rot);
    this.y[i] = (this.r+this.f_radius)*sin(angle+this.rot);
    
    vertex(this.x[i],this.y[i]); 
  }
  this.rot += this.speed;
  endShape(CLOSE); 
  pop();
    }
}