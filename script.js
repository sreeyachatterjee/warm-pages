// --------------------
// love notes
// --------------------
const notes = [
  "the way you look at me like i'm home 🫶",
  "how you always make time for me, no matter what ❤️",
  "your laugh — it's my favorite sound 🥹",
  "how safe i feel when i'm with you 🤍",
  "the way you believe in me, even when i don't ✨",
  "how you make ordinary days feel special 💕",
  "you. just you. 💗"
];

// --------------------
// reveal button
// --------------------
const btn = document.getElementById("reveal-btn");
const text = document.getElementById("reveal-text");

btn.onclick = () => {
  // Pick a random note
  const randomIndex = Math.floor(Math.random() * notes.length);
  text.innerText = notes[randomIndex];
  
  // Toggle display
  if (text.style.display === "block") {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
};

// --------------------
// maze game
// --------------------
const mazeSize = 10;
const maze = document.getElementById("maze");

// Create a 10x10 maze matrix: 0 = path, 1 = wall
// This maze is hand-crafted to ensure it's solvable
let grid = [
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

let playerPos = { x: 0, y: 0 };
const goalPos = { x: 9, y: 9 };

// --------------------
// render function
// --------------------
function renderMaze() {
  maze.innerHTML = '';
  for(let y = 0; y < mazeSize; y++){
    for(let x = 0; x < mazeSize; x++){
      const cell = document.createElement('div');
      cell.classList.add('maze-cell');

      // wall or path
      if(grid[y][x] === 1) {
        cell.classList.add('wall');
      }

      // player
      if(x === playerPos.x && y === playerPos.y){
        cell.classList.add('player');
        cell.textContent = 'P';
      }

      // goal
      if(x === goalPos.x && y === goalPos.y){
        cell.classList.add('goal');
        cell.textContent = 'S';
      }

      maze.appendChild(cell);
    }
  }
}

// --------------------
// move player
// --------------------
document.addEventListener('keydown', e => {
  let newX = playerPos.x;
  let newY = playerPos.y;

  if(e.key === 'ArrowUp') newY--;
  else if(e.key === 'ArrowDown') newY++;
  else if(e.key === 'ArrowLeft') newX--;
  else if(e.key === 'ArrowRight') newX++;
  else return; // ignore other keys

  // only move if within bounds and on path (0)
  if(newX >= 0 && newX < mazeSize && newY >= 0 && newY < mazeSize && grid[newY][newX] === 0){
    playerPos.x = newX;
    playerPos.y = newY;
    renderMaze();
    
    // check if reached goal
    if(playerPos.x === goalPos.x && playerPos.y === goalPos.y){
      setTimeout(() => {
        alert('you found me! ❤️ happy valentine\'s day, my love! 💕');
      }, 100);
    }
  }
});

// --------------------
// initial render
// --------------------
renderMaze();

// --------------------
// log matrix to console for debugging
// --------------------
console.log("maze matrix (0=path, 1=wall):");
console.table(grid);
