let cuadricula = 600;

let rows = 16;
let columns = 16;

let sketchArea = document.querySelector("#container");
sketchArea.style.width = `${cuadricula}px`;
sketchArea.style.height = `${cuadricula}px`;

function changeBackgroundColor () {
    this.style.backgroundColor = "black";
}

function createrGridCells() {
    for (i = 0; i < (rows * columns); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(cuadricula / columns) - 2}px`;
        gridCell.style.height = `${(cuadricula / rows) - 2}px`;
        gridCell.classList.add = ("cell");

        sketchArea.appendChild(gridCell); 
        
        gridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}

createrGridCells();


