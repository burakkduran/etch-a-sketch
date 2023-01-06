// Grid Size
gridSize(16*16)
function gridSize(size) {
    for (let i = 0; i <= size-1; i++) {
        createGrid()        
    }
}
// Creating Grid
function createGrid() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    document.getElementById("grid-container").appendChild(newDiv);
}

// Hover Effect
const container = document.getElementById("grid-container")

container.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover"); 
  }, false);
