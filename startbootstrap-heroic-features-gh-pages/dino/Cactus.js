class Cactus {
  constructor(){
    this.r = 50;
    this.x = width;
    this.y = height - this.r;
  }
  move(){
    this.x -= 8;
  
  }
  bb(){
  noFill();
  stroke(255,0,0);
  rect(this.x,this.y,this.r,this.r);
  }

  show(){
    image(cactus_image,this.x,this.y,this.r,this.r);
    this.bb();
  
  }
}