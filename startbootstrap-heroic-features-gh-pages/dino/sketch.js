let x = 5;
let xCoord = 100;
let yCoord = 100;
let img;
let dogboi;
let sponge;
let cactus_image;
let cactus;
let cacti = [];
let soundclassifier;

function preload(){
  img = loadImage("gar.png")
  cactus_image = loadImage("cactus.png")
  const options = {probabilityThreshold: 0.9 };
  soundclassifier = ml5.soundClassifier('SpeechCommands18w', options, modelReady);
}
function modelReady(){
  console.log("OKAY")
}

function setup() {
  createCanvas(600, 400);
 
  sponge = new Gar();
  cactus = new Cactus();
  
  soundclassifier.classify(gotResult);

}
function gotResult(error,result){
  if(error){
  console.log(error);
    return;
  }
  console.log(result[0]);
  if(result[0].label == 'up'){
  sponge.jump();
  }
}

function draw() {
  background(255,255,255);
  
  if(random(1)<0.008){
   cacti.push(new Cactus());
  
  }
 
 
  

 for(let item of cacti){
    item.show();
    item.move();
    if(sponge.hits(item)){
    console.log("Game Over");
    noLoop();
  }
  }
  
  sponge.show();
  
  sponge.move();

  sponge.fall();
 
  
}

function keyPressed() {
//   if (keyCode === RIGHT_ARROW){
//     sponge.moveRight();
  
//   }
//   if (keyCode === LEFT_ARROW){
//     sponge.moveLeft();
//   }
  if (keyCode === UP_ARROW){
    if (sponge.y>=height-65){
    sponge.jump();
    }
  }
//   if (keyCode === DOWN_ARROW){
//     sponge.moveDown();
//   }
  
  console.log(key);
  
}


