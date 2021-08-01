const SIDE = 100;
const MAX = 100;
const WINDOW = 500;

function fill(e)
{
  this.classList.add('fill');
}

function askSize()
{
  let size;

  do{
    size = parseInt(prompt("Please enter your desired size", "10"));
  }
  while(size < 1 || size > 100);
    
  return size;
}

function clear()
{
  this.classList.remove('fill');
}
//Select the main container html
const container = document.querySelector(".container");

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    for (let j = 0; j < size; j++) {
      let col = document.createElement('div');
      col.className = 'square';
      col.style.height = (WINDOW / size) + "px";
      col.style.width = (WINDOW / size) + "px";
      row.appendChild(col);
    }
    container.appendChild(row);
  }
}

// Main Game
makeGrid(SIDE);

const squares = document.querySelectorAll('.square');
const reset = document.querySelector('.reset-button');

squares.forEach(square => square.addEventListener('mouseover', fill));

reset.addEventListener('click', () =>{
  while(container.firstChild)
  {
    container.removeChild(container.firstChild);
  }
  makeGrid(askSize());
  const squaress = document.querySelectorAll('.square');
  squaress.forEach(square => square.addEventListener('mouseover', fill));
} )
