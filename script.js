// --------------------
// love notes randomizer
// --------------------
const notes = [
  "the way you look at me like i’m home 🫶",
  "how you always make time for me, no matter what ❤️",
  "your laugh — it’s my favorite sound 🥹",
  "how safe i feel when i’m with you 🤍",
  "the way you believe in me, even when i don’t ✨",
  "how you make ordinary days feel special 💕",
  "you. just you."
];

const revealBtn = document.getElementById("reveal-btn");
const revealText = document.getElementById("reveal-text");

revealBtn.onclick = () => {
  const randomIndex = Math.floor(Math.random() * notes.length);
  revealText.textContent = notes[randomIndex];
  revealText.style.display = "block";
};

const mazeSize = 10;
const maze = document.getElementById("maze");

let grid = [
  [0,1,1,1,0,0,1,1,1,0],
  [0,0,0,1,0,1,0,0,1,0],
  [1,1,0,0,0,1,0,1,0,0],
  [0,1,1,1,0,1,0,1,1,0],
  [0,0,0,1,0,0,0,0,1,0],
  [1,1,0,1,1,1,0,1,1,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,1,1,1,0,1,1,1,1,0],
  [0,0,0,1,0,0,0,0,1,0],
  [1,1,0,1,1,1,0,1,0,0]
];

let playerPos = {x:0, y:0};
const goalPos = {x:9, y:9};

function renderMaze(){
  maze.innerHTML = '';
  for(let y=0;y<mazeSize;y++){
    for(let x=0;x<mazeSize;x++){
      const cell = document.createElement('div');
      cell.classList.add('maze-cell');
      if(grid[y][x] === 1) cell.classList.add('wall');
      if(x===playerPos.x && y===playerPos.y){
        cell.classList.add('player');
        cell.textContent = 'P';
      }
      if(x===goalPos.x && y===goalPos.y){
        cell.classList.add('goal');
        cell.textContent = 'S';
      }
      maze.appendChild(cell);
    }
  }
}

document.addEventListener('keydown', e=>{
  let newX = playerPos.x;
  let newY = playerPos.y;
  if(e.key === 'ArrowUp') newY--;
  else if(e.key === 'ArrowDown') newY++;
  else if(e.key === 'ArrowLeft') newX--;
  else if(e.key === 'ArrowRight') newX++;
  if(newX>=0 && newX<mazeSize && newY>=0 && newY<mazeSize && grid[newY][newX]===0){
    playerPos.x = newX;
    playerPos.y = newY;
    renderMaze();
    if(playerPos.x===goalPos.x && playerPos.y===goalPos.y){
      alert("You found me! ❤️");
    }
  }
});

renderMaze();