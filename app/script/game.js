
// Inits
window.onload = function init() {
  console.log('init function loaded');
  var game = new GF();
  game.start();
};


// GAME FRAMEWORK STARTS HERE
var GF = function(){
  // Vars relative to the canvas
  var canvas, ctx, w, h;

  ...
  var measureFPS = function(newTime){
    ...
};
// Clears the canvas content
function clearCanvas() {
   ctx.clearRect(0, 0, w, h);
}
// Functions for drawing the monster and perhaps other objects
function drawMyMonster(x, y) {
   ...
}
var mainLoop = function(time){
    // Main function, called each frame
    measureFPS(time);
    // Clear the canvas
    clearCanvas();
    // Draw the monster
    drawMyMonster(10+Math.random()*10, 10+Math.random()*10);
    // Call the animation loop every 1/60th of second
    requestAnimationFrame(mainLoop);
};

var start = function(){
    ...
    // Canvas, context etc.
    canvas = document.querySelector("#myCanvas");
    // often useful
    w = canvas.width;
    h = canvas.height;
    // important, we will draw with this object
    ctx = canvas.getContext('2d');

    // Start the animation
    requestAnimationFrame(mainLoop);
};

//our GameFramework returns a public API visible from outside its scope
return {
   start: start
};
};
