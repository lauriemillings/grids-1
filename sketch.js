const CANVAS_SIZE = 800;
const NUMBER_OF_CELLS = 20;
// 800/20=40 cell size = 40x40
const CELL_SIZE = CANVAS_SIZE / NUMBER_OF_CELLS;
// pink x2, red, black, blue, orange, green
const COLORS_ARRAY = ["#f9b6c9", "#f9b6c9", "#ff4619", "#24252a", "#004ea7", "#f76500", "#04945e"];
const POSSIBLE_SIZES = [
  CELL_SIZE * 2,
  CELL_SIZE * 4,
  CELL_SIZE * 6,
  CELL_SIZE * 8,

];
const d = CELL_SIZE*2;

function preload() {}

function setup() {
 //create a canvas of 800 x 800 pixels
 createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  
 // define a background color for the canvas
 background(random(COLORS_ARRAY));
 
//   set stroke
  strokeWeight(0);
  
//   define x and y
  let x = 0;
  let y = 0;
  
 // loop through canvas to create grid
 while(y < CANVAS_SIZE){

  // set height
  let height = CELL_SIZE*2;

// reset x
  x = 0;
  while(x < CANVAS_SIZE){
   
 // calculate random colour
   const cellColor = random(COLORS_ARRAY);
   
 //set fill
fill(cellColor);
   
 //calculate size
let width = random(POSSIBLE_SIZES);
 if(x + width > CANVAS_SIZE) width = CANVAS_SIZE - x;
   
 //draw image
beginShape();
vertex(x-d, y);
vertex(x-d*2 + width, y);
vertex(x-d*2 + d + width, y + height);
vertex(x-d*2 + d, y + height);
endShape(CLOSE);

//  update x
 x = x + width;
 }

// update y
 y = y + height;
 }
}

