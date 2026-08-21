const GRID_SIZE = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${GRID_SIZE}px`;

function createCells() {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(GRID_SIZE / squaresPerSide) - 2}px`;

    for (let i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeColor);
    }
}

function changeColor() {
    this.style.backgroundColor = "black";
}

createCells();