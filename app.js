const grid = document.getElementById('gridContainer');
const clear = document.getElementById('clear-btn');
let gridSize = document.getElementById('gridSize');
let gridContainer = document.getElementById('gridContainer');

let cols ;
let rows ;

let isDrawing = false;

function createGrid() {

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }


  let choice = parseInt(gridSize.value);

  if (choice == 32) {
    rows = 32;
    cols = 32;
    gridContainer.classList.remove('square16');
    gridContainer.classList.remove('square64');
    gridContainer.classList.add('square32');
    
  } else if (choice == 64) {
    rows = 64;
    cols = 64;
    gridContainer.classList.remove('square16');
    gridContainer.classList.remove('square32');
    gridContainer.classList.add('square64');
    
  }else if(choice == 16){
    rows = 16;
    cols = 16;
    gridContainer.classList.remove('square64');
    gridContainer.classList.remove('square32');
    gridContainer.classList.add('square16');
    
  }

  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      grid.appendChild(square);

      square.addEventListener('mousedown', () => {
        isDrawing = true; 
        square.style.backgroundColor = '#000000';
      });

      square.addEventListener('mousemove', () => {
        if(isDrawing){
        square.style.backgroundColor = '#000000';
    }
      });

      square.addEventListener('mouseup', () => {
        isDrawing = false; 
      });

        clear.addEventListener('click', () => {
        square.style.backgroundColor = 'white';
      });
      
    }
  }
}




createGrid();
gridSize.addEventListener('change', createGrid);








