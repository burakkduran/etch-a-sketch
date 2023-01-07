const clearCanvasBtn = document.querySelector("#clearCanvas");
const gridContainer = document.querySelector("#grid-container");
const canvasSize = document.querySelector("#canvasSize");
let sizeBoard = document.querySelector("#sizeShower")
let newSize = 16;

makeGrid(16)
sizeShower(16)

// Size Selector
canvasSize.oninput = function() {
    newSize =  +this.value;
    makeGrid(+newSize)
    sizeShower(newSize)
}
function sizeShower(size) {
    sizeBoard.innerHTML = `${size} x ${size} `
}

// Grid maker
function makeGrid(size) {
    clearCanvas()
    for (let i = 0; i < size**2; i++) {
        const allDivs = document.createElement("div")
        allDivs.classList.add("box")
        gridContainer.appendChild(allDivs)
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 2fr)`
        gridContainer.style.gridTemplateRows = `repeat(${size}, 2fr)`
    }
    // Rainbow Brush
    let divs = document.querySelectorAll('.box')
    divs.forEach(e => { e.addEventListener('mousemove', () => makeRgb(e))});
} 

// Canvas Clear
function clearCanvas() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild)
    }    
}    

// RGB Maker
function makeRgb(box) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    box.style.background = bgColor 
}

// Clear Canvas button
clearCanvasBtn.addEventListener('click', clearCanvas2)
function clearCanvas2() {
    makeGrid(+newSize)
}
