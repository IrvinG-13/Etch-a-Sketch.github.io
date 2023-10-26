let gridContainer = document.getElementById("gridContainer");
let clearButton = document.getElementById("clear-btn");
let resizeButton = document.getElementById("resize-btn");

function createGrid(rows, cols) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr`;

    for (let i = 0; i < rows * cols; i++) {
        let square = document.createElement("div");
        square.className = "square";
        gridContainer.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#000000';
        });
    }
}

function clearGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = '';
    });
}

function resizeGrid() {
    let size = prompt("Enter the number of squares per side (1-100):");
    size = parseInt(size);

    if (size >= 1 && size <= 100) {
        createGrid(size, size);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

createGrid(16, 16);









