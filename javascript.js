let cuadricula = 600;

let squaresPerSide = 16;

let sketchArea = document.querySelector("#container");
let slideContainer = document.querySelector("#sliderContainer");
let slider = document.querySelector("#slider");
let sliderValue = document.querySelector("#valueSlider");

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

sketchArea.style.width = sketchArea.style.height = `${cuadricula}px`;

function changeBackgroundColor () {
    this.style.backgroundColor = "black";
}

function createrGridCells(squaresPerSide) {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = (`${(cuadricula / squaresPerSide) - 2}px`);

    for (i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = `${(cuadricula / squaresPerSide) - 2}px`;
        gridCell.classList.add = ("cell");

        sketchArea.appendChild(gridCell); 
        
        gridCell.addEventListener("mouseover", changeBackgroundColor);
    }
}

function removeGridCells () {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

slider.oninput = function () {
    let txt = `${this.value} x ${this.value}(Resolution)`;
    sliderValue.textContent = txt;
    removeGridCells();
    createrGridCells(this.value);
}

createrGridCells(16);


