/// DECLARED VARIABLES
var trex ,trex_running;
var ground;

// LOAD ALL FILES - code indentation =managing / organizing your code
// parenthesis ()  

function preload()
{
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}


// DO THE SET UP
function setup()
{
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(50,150,10,200);
  trex.addAnimation("Running", trex_running);
  trex.scale=0.5;
}


// ADDING FUNCTIONALITY
function draw()
{
  background("white");
  drawSprites();


}
