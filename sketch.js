var movingrect, fixedrect;

function setup() {
  //creates the canvas
  createCanvas(800, 400);

  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "red";
  movingrect.debug = true;

  fixedrect = createSprite(300, 300, 50, 50);
  fixedrect.shapeColor = "black";
  fixedrect.debug = true;
}

function draw() {
  //to add color and clear the screen
  background("blue");

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 
  && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
  && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
  && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) {
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}
else{
  fixedrect.shapeColor = "black";
  movingrect.shapeColor = "red";
}
  drawSprites();
}