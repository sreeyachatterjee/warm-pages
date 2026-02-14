<<<<<<< HEAD
// Smooth scroll for buttons
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// 💕 Reasons I Love You – tap to reveal
const notes = [
    "The way you look at me like I’m home 🫶",
    "How you always make time for me, no matter what ❤️",
    "Your laugh — it’s my favorite sound 🥹",
    "How safe I feel when I’m with you 🤍",
    "The way you believe in me, even when I don’t ✨",
    "How you make ordinary days feel special 💕",
    "You. Just you."
];

function newNote() {
    const noteElement = document.getElementById("note");

    if (!noteElement) {
        console.error("Element with id='note' not found.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * notes.length);
    noteElement.innerText = notes[randomIndex];
}

// Canvas & tile size
const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");
const tileSize = 50; // 20 tiles × 50px = 1000px

// 0 = path, 1 = wall (super hard maze)
const maze = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1],
  [1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1],
  [1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1],
  [1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1],
  [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
  [1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1],
  [1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1],
  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
  [1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1],
  [1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1],
  [1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

let player = { x: 1, y: 1 };  // S
const goal = { x: 18, y: 18 }; // P

function drawMaze() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 1) {
        ctx.fillStyle = "#ffb3c6"; // walls
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      } else {
        ctx.fillStyle = "#fff"; // path
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }

  // Draw goal "P"
  ctx.fillStyle = "#ff4d6d";
  ctx.font = "bold 40px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("S", goal.x * tileSize + tileSize/2, goal.y * tileSize + tileSize/2);

  // Draw player "S"
  ctx.fillStyle = "#ff006e";
  ctx.fillText("P", player.x * tileSize + tileSize/2, player.y * tileSize + tileSize/2);
}

function movePlayer(dx, dy) {
  const newX = player.x + dx;
  const newY = player.y + dy;

  if (maze[newY][newX] === 0) {
    player.x = newX;
    player.y = newY;
  }

  if (player.x === goal.x && player.y === goal.y) {
    setTimeout(() => {
      alert("You found me. Just like always ❤️");
    }, 100);
  }

  drawMaze();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") movePlayer(0, -1);
  if (e.key === "ArrowDown") movePlayer(0, 1);
  if (e.key === "ArrowLeft") movePlayer(-1, 0);
  if (e.key === "ArrowRight") movePlayer(1, 0);
});

// Initial draw
drawMaze();
=======
const questions = [
    "What was your first thought when we met? 💭",
    "What’s your favorite memory of us? 🥰",
    "What do you love the most about me? ❤️",
    "If we traveled anywhere together, where would it be? ✈️",
    "What song reminds you of us? 🎵",
    "What’s one thing you want us to do together this year? 💕",
    "Do you know how much I love you? (Hint: A LOT 😘)"
];

function newQuestion() {
    const random = Math.floor(Math.random() * questions.length);
    document.getElementById("question").innerText = questions[random];
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
>>>>>>> 45b432b372cb554c34adc335c86c1e44a0b88e82
