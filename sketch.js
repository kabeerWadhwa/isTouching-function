var movingrect, fixedrect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(800,800);
  movingrect = createSprite(400, 400, 50, 50);
  movingrect.shapeColor = "blue";
  fixedrect = createSprite(680,400,30,30);
  fixedrect.shapeColor = "blue"
  gameObject1 = createSprite(400,150,20,20);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,300,20,20);
  gameObject2.shapeColor = "green";
}

function draw() {
  background(0);
  movingrect.y = mouseY
  movingrect.x = mouseX

  if(isTouching(movingrect,gameObject1)) {
    movingrect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else {
    gameObject1.shapeColor = "green";
    movingrect.shapeColor = "blue";
  }
  drawSprites();
}

function isTouching(object1,object2) {
  if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
    object2.x - object1.x < object2.width/2 + object2.width/2 && 
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true
  }
  else {
    return false
  }
}