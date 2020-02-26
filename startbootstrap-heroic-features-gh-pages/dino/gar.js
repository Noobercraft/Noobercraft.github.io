class Gar {
  constructor() {
    this.x = 0;
    this.y = height-65;
    this.r = 70;
    this.v = 0;
    
    
  }
  hits(cactus){
  // console.log(cactus.x);
    let hit = collideRectRect(this.x,this.y,this.r,this.r,cactus.x,cactus.y,cactus.r,cactus.r);
    return hit;
  }
  jump(){
   this.v = -16;
  }
  bb() {
  noFill();
  stroke(0,0,255);
  rect(this.x,this.y,this.r,this.r);
  }
  show() {
        image(img,this.x,this.y,this.r,this.r);
    this.bb();
  }
  
  
  
  move() {
    this.y += this.v;
    this.y = constrain(this.y,-1000,height-65);
  }
  
  fall() {
  this.v += 1;
  }
  // moveDown() {
  //   this.y += 5;
  // }
  // moveLeft() {
  //   this.x -= 5;
  // }
  // moveRight() {
  //   this.x += 5;
  // }

}