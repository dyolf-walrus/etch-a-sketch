document.getElementById('gridSize').defaultValue = 16;
let size = document.getElementById('gridSize').value;
let error = document.querySelector('.error')

let canvas = document.getElementById('sketcher');
let canvasWidth = document.getElementById('sketcher').offsetWidth;
let canvasHeight = document.getElementById('sketcher').offsetHeight;

let boxWidth = canvasWidth / size;
let boxHeight = canvasHeight / size;
let boxNum = size * size;

let drawColor = '#000000'
let colorInput = document.getElementById('drawColor');
colorInput.addEventListener('input', updateColor);
function updateColor() {
    drawColor = document.getElementById('drawColor').value;
}

let container = document.getElementById('sketcher');

let mouse = false;
document.addEventListener('mousedown', function() {
    mouse = true;
})
document.addEventListener('mouseup', function() {
    mouse = false;
})

function createGrid() {
    size = document.getElementById('gridSize').value;
    boxWidth = canvasWidth / size;
    boxHeight = canvasHeight / size;
    boxNum = size * size;
    for (let i = 0; i < boxNum; i++) {
    let box = document.createElement("div");
    box.classList.add('box');
    box.style.width = boxWidth + 'px';
    box.style.height = boxHeight + 'px';
    box.addEventListener('mouseover', function() {
        if (mouse) {
        box.style.backgroundColor = `${drawColor}`;
        box.style.borderColor = `${drawColor}`;}
    })
    container.appendChild(box);
}
}

createGrid();

function updateSize() {
    size = document.getElementById('gridSize').value;
    if (size > 64) {
        size = 64;
        error.textContent = "64x64 is the maximum grid size"
    }
    if (size < 16) {
        size = 16;
        error.textContent = "16x16 is the minimum grid size"
    }
    if (size >= 16 && size <= 64) {
        boxWidth = canvasWidth / size;
        boxHeight = canvasHeight / size;
        boxNum = size * size;
        createGrid();
    }
}

function shakeEtch() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    error.textContent = ""
    updateSize();
}

const shakeButton = document.querySelector('button')
shakeButton.addEventListener('click', shakeEtch)