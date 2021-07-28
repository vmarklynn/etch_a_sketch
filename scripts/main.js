const SIDE= 50;

function fill(e)
{
  this.classList.add('fill');
}

//Select the main container html
const container = document.querySelector(".container");

for(let i=0; i < SIDE; i++)
{
  let row = document.createElement('div');
  for(let j=0; j < SIDE; j++)
  {
    let col = document.createElement('div');
    col.className = 'square';
    row.appendChild(col);
  }
  container.appendChild(row);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', fill));

