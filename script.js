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
  "you. just you. 💗",
  "your kindness and the way you care for others 🌟",
  "how you listen to me when i need to talk 👂",
  "the little things you do that show you care 💝"
];

// function to show a random note
function newNote() {
  const noteElement = document.getElementById("note");
  if (!noteElement) return;
  const randomIndex = Math.floor(Math.random() * notes.length);
  noteElement.innerText = notes[randomIndex];
}

// --------------------
// reveal button - original
// --------------------
const btn = document.getElementById("reveal-btn");
const text = document.getElementById("reveal-text");

if (btn && text) {
  btn.onclick = () => {
    if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "block";
      newNote();
    } else {
      newNote(); // show a new note when clicking again
    }
  };
}

// --------------------
// new reveal button for love notes
// --------------------
// dynamically create the button and note container
const loveNotesBtn = document.createElement("button");
loveNotesBtn.innerText = "what do i love about you? ❤️";
loveNotesBtn.style.display = "block";
loveNotesBtn.style.margin = "20px auto";
loveNotesBtn.style.padding = "15px 30px";
loveNotesBtn.style.fontSize = "1.1em";
loveNotesBtn.style.fontFamily = "'Pacifico', cursive";
loveNotesBtn.style.background = "#ff66aa";
loveNotesBtn.style.color = "#fff";
loveNotesBtn.style.border = "none";
loveNotesBtn.style.borderRadius = "25px";
loveNotesBtn.style.cursor = "pointer";
loveNotesBtn.style.transition = "all 0.3s ease";
loveNotesBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
loveNotesBtn.onmouseover = () => {
  loveNotesBtn.style.background = "#ff3399";
  loveNotesBtn.style.transform = "translateY(-2px)";
  loveNotesBtn.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)";
};
loveNotesBtn.onmouseout = () => {
  loveNotesBtn.style.background = "#ff66aa";
  loveNotesBtn.style.transform = "translateY(0)";
  loveNotesBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
};

// create note container
const loveNoteDiv = document.createElement("div");
loveNoteDiv.id = "note";
loveNoteDiv.className = "hidden-text";

// append button and note div before the first h2
const firstH2 = document.querySelector("h2");
if (firstH2) {
  firstH2.parentNode.insertBefore(loveNotesBtn, firstH2);
  firstH2.parentNode.insertBefore(loveNoteDiv, firstH2);
}

// click event to show random notes
loveNotesBtn.onclick = () => {
  loveNoteDiv.style.display = "block";
  newNote();
};

// --------------------
// maze game
// --------------------
const mazeSize = 10;
const mazeElement = document.getElementById("maze");

// Define the maze grid: 0 = path, 1 = wall
let grid = [
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
];

let playerPos = { x: 0, y: 0 };
const goalPos = { x: 9, y: 9 };

// render function
function renderMaze() {
  if (!mazeElement) return;
  
  mazeElement.innerHTML = '';
  
  for (let y = 0; y < mazeSize; y++) {
    for (let x = 0; x < mazeSize; x++) {
      const cell = document.createElement('div');
      cell.classList.add('maze-cell');

      // wall or path
      if (grid[y][x] === 1) {
        cell.classList.add('wall');
      }

      // player position
      if (x === playerPos.x && y === playerPos.y) {
        cell.classList.add('player');
        cell.textContent = 'P';
      }

      // goal position
      if (x === goalPos.x && y === goalPos.y) {
        cell.classList.add('goal');
        cell.textContent = 'S';
      }

      mazeElement.appendChild(cell);
    }
  }
}

// move player
document.addEventListener('keydown', (e) => {
  let newX = playerPos.x;
  let newY = playerPos.y;

  if (e.key === 'ArrowUp') {
    newY--;
  } else if (e.key === 'ArrowDown') {
    newY++;
  } else if (e.key === 'ArrowLeft') {
    newX--;
  } else if (e.key === 'ArrowRight') {
    newX++;
  } else {
    return; // ignore other keys
  }

  e.preventDefault();

  if (newX >= 0 && newX < mazeSize && newY >= 0 && newY < mazeSize && grid[newY][newX] === 0) {
    playerPos.x = newX;
    playerPos.y = newY;
    renderMaze();
    
    if (playerPos.x === goalPos.x && playerPos.y === goalPos.y) {
      setTimeout(() => {
        alert('you found me! ❤️ my heart is yours forever 💕');
      }, 100);
    }
  }
});

// initial render
if (mazeElement) {
  renderMaze();
}

// log maze to console
console.log("maze matrix (0=path, 1=wall):");
console.table(grid);