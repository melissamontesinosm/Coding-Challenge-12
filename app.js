
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
    ctx.beginPath(); // Reset the path for the next shape
});
canvas.addEventListener('mouseout', () => {  // Stop drawing when mouse leaves canvas
    drawing = false;
});

// Task 3: Implement Shape Drawing Logic
function getSelectedShape() { // Function to get the selected shape
    for (let shape of shapes) {
        if (shape.checked) {
            return shape.value;
        }
    }
    return 'line'; // Default to line if none selected
}

function drawShape(endX, endY) { // Function to draw the selected shape
    const selectedShape = getSelectedShape();
    ctx.strokeStyle = color.value;

    ctx.beginPath(); // Start a new shape

    switch (selectedShape) {
        case 'line':
            drawLine(endX, endY);
            break;
        case 'rectangle':
            drawRectangle(endX, endY);
            break;
        case 'circle':
            drawCircle(endX, endY);
            break;
    }

    ctx.stroke(); // Render the shape on the canvas
    ctx.closePath(); // End the current path
}

function drawLine(endX, endY) { // Function to draw line
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
}

function drawRectangle(endX, endY) { // Function to draw rectangle
    const width = endX - startX;
    const height = endY - startY;
    ctx.rect(startX, startY, width, height);
}

function drawCircle(endX, endY) { // Function to draw circle
    const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
}

