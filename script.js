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
  const noteElement = document.getElementById("love-note-text");
  if (!noteElement) return;
  const randomIndex = Math.floor(Math.random() * notes.length);
  noteElement.innerText = notes[randomIndex];
}

// --------------------
// original reveal button (upper)
// --------------------
const upperBtn = document.getElementById("reveal-btn");
const upperText = document.getElementById("reveal-text");

if (upperBtn && upperText) {
  upperBtn.onclick = () => {
    if (upperText.style.display === "none" || upperText.style.display === "") {
      upperText.style.display = "block";
    }
  };
}

// --------------------
// new reveal section after Spotify
// --------------------

// create container div
const loveSection = document.createElement("div");
loveSection.style.textAlign = "center";
loveSection.style.marginTop = "30px";

// create question text
const loveQuestion = document.createElement("p");
loveQuestion.innerText = "what do i love about you? ❤️";
loveQuestion.style.fontSize = "1.3em";
loveQuestion.style.fontWeight = "500";
loveSection.appendChild(loveQuestion);

// create reveal button
const loveBtn = document.createElement("button");
loveBtn.innerText = "reveal now";
loveBtn.style.display = "inline-block";
loveBtn.style.margin = "10px auto";
loveBtn.style.padding = "12px 28px";
loveBtn.style.fontSize = "1.1em";
loveBtn.style.fontFamily = "'Pacifico', cursive";
loveBtn.style.background = "#ff66aa";
loveBtn.style.color = "#fff";
loveBtn.style.border = "none";
loveBtn.style.borderRadius = "25px";
loveBtn.style.cursor = "pointer";
loveBtn.style.transition = "all 0.3s ease";
loveBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
loveBtn.onmouseover = () => {
  loveBtn.style.background = "#ff3399";
  loveBtn.style.transform = "translateY(-2px)";
  loveBtn.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)";
};
loveBtn.onmouseout = () => {
  loveBtn.style.background = "#ff66aa";
  loveBtn.style.transform = "translateY(0)";
  loveBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
};
loveSection.appendChild(loveBtn);

// create love note text container
const loveNoteDiv = document.createElement("div");
loveNoteDiv.id = "love-note-text";
loveNoteDiv.className = "hidden-text";
loveSection.appendChild(loveNoteDiv);

// append this new section after the Spotify section
const spotifySection = document.querySelector(".music");
if (spotifySection) {
  spotifySection.parentNode.insertBefore(loveSection, spotifySection.nextSibling);
}

// button click to reveal random note
loveBtn.onclick = () => {
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

      if (grid[y][x] === 1) {
        cell.classList.add('wall');
      }

      if (x === playerPos.x && y === playerPos.y) {
        cell.classList.add('player');
        cell.textContent = 'P';
      }

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

  if (e.key === 'ArrowUp') newY--;
  else if (e.key === 'ArrowDown') newY++;
  else if (e.key === 'ArrowLeft') newX--;
  else if (e.key === 'ArrowRight') newX++;
  else return;

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
if (mazeElement) renderMaze();

// log maze to console
console.log("maze matrix (0=path, 1=wall):");
console.table(grid);