// --------------------
// love notes
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

function newnote() {
  const noteelement = document.getElementById("note");
  if (!noteelement) return;
  const randomindex = Math.floor(Math.random() * notes.length);
  noteelement.innerText = notes[randomindex];
}

// --------------------
// reveal button
// --------------------
const btn = document.getElementById("reveal-btn");
const text = document.getElementById("reveal-text");
btn.onclick = () => {
  text.style.display = text.style.display === "none" ? "block" : "none";
};

// --------------------
// maze game
// --------------------
const mazeSize = 10;
const maze = document.getElementById("maze");

// create matrix: 0 = path, 1 = wall
let grid = Array.from({ length: mazeSize }, () => Array(mazeSize).fill(1));
let playerPos = { x: 0, y: 0 };
const goalPos = { x: mazeSize - 1, y: mazeSize - 1 };

// DFS maze generator: guarantees solvable maze
function generateMaze(x = 0, y = 0) {
  grid[y][x] = 0; // mark path
  const directions = [[0,1],[1,0],[0,-1],[-1,0]].sort(() => Math.random()-0.5);
  for (const [dx, dy] of directions) {
    const nx = x + dx*2;
    const ny = y + dy*2;
    if(ny>=0 && ny<mazeSize && nx>=0 && nx<mazeSize && grid[ny][nx] === 1){
      grid[y + dy][x + dx] = 0; // carve path between
      generateMaze(nx, ny);
    }
  }
}

// generate maze
generateMaze();

// --------------------
// render function
// --------------------
function renderMaze() {
  maze.innerHTML = '';
  for(let y=0; y<mazeSize; y++){
    for(let x=0; x<mazeSize; x++){
      const cell = document.createElement('div');
      cell.classList.add('maze-cell');

      // wall or path
      if(grid[y][x] === 1) cell.classList.add('wall');

      // player
      if(x === playerPos.x && y === playerPos.y){
        cell.classList.add('player');
        cell.textContent = 'p';
      }

      // goal
      if(x === goalPos.x && y === goalPos.y){
        cell.classList.add('goal');
        cell.textContent = 's';
      }

      // optional: show 0 and 1 for debugging
      // cell.textContent = grid[y][x];

      maze.appendChild(cell);
    }
  }
}

// --------------------
// move player
// --------------------
document.addEventListener('keydown', e=>{
  let newX = playerPos.x;
  let newY = playerPos.y;

  if(e.key === 'ArrowUp') newY--;
  else if(e.key === 'ArrowDown') newY++;
  else if(e.key === 'ArrowLeft') newX--;
  else if(e.key === 'ArrowRight') newX++;

  // only move if path (0)
  if(newX>=0 && newX<mazeSize && newY>=0 && newY<mazeSize && grid[newY][newX]===0){
    playerPos.x = newX;
    playerPos.y = newY;
    renderMaze();
    if(playerPos.x === goalPos.x && playerPos.y === goalPos.y){
      alert('you found me! ❤️');
    }
  }
});

// --------------------
// initial render
// --------------------
renderMaze();

// --------------------
// optional: log matrix to console
// --------------------
console.log("maze matrix (0=path, 1=wall):");
console.table(grid);