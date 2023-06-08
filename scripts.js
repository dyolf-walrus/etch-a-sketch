document.getElementById('gridSize').defaultValue = 16;
let size = document.getElementById('gridSize').value;
let error = document.querySelector('.error')

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
    console.log(size);
}

function clearBoxes() {

}

function shakeEtch() {
    error.textContent = ""
    updateSize();
    clearBoxes();
}

const shakeButton = document.querySelector('button')

shakeButton.addEventListener('click', shakeEtch)