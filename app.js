
// Task 2: Configure the JavaScript for Drawing Context

//Setting up the context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
//Reference HTML elements
const color = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearCanvas');
const shapes = document.getElementsByName('shape');

let drawing = false;
let startX, startY;

//Adding event listeners for mouse events
canvas.addEventListener('mousedown', (e) => {// Start drawing on mouse down
    drawing = true;
    startX = e.offsetX; 
    startY = e.offsetY;
});
canvas.addEventListener('mousemove', (e) => {// Draw on mouse move
    if (drawing) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        drawShape(e.offsetX, e.offsetY);
    }
});
canvas.addEventListener('mouseup', () => { // Stop drawing on mouse up
    drawing = false;
});
canvas.addEventListener('mouseout', () => {  // Stop drawing when mouse leaves canvas
    drawing = false;
});


