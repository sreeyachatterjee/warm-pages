// love notes
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
    noteelement.innertext = notes[randomindex];
}

// maze game
const canvas = document.getElementById("mazecanvas");
const ctx = canvas.getContext("2d");
const tilesize = 50;

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

let player = { x: 1, y: 1 };
const goal = { x: 18, y: 18 };

function drawmaze() {
    ctx.clearrect(0,0,canvas.width,canvas.height);
    for(let y=0;y<maze.length;y++){
        for(let x=0;x<maze[y].length;x++){
            if(maze[y][x]===1){
                ctx.fillstyle="#ffb3c6";
                ctx.fillrect(x*tilesize,y*tilesize,tilesize,tilesize);
            }else{
                ctx.fillstyle="#fff";
                ctx.fillrect(x*tilesize,y*tilesize,tilesize,tilesize);
            }
        }
    }
    ctx.fillstyle="#ff4d6d";
    ctx.font="bold 40px arial";
    ctx.textalign="center";
    ctx.textbaseline="middle";
    ctx.filltext("p",goal.x*tilesize+tilesize/2,goal.y*tilesize+tilesize/2);

    ctx.fillstyle="#ff006e";
    ctx.filltext("s",player.x*tilesize+tilesize/2,player.y*tilesize+tilesize/2);
}

function moveplayer(dx,dy){
    const newx = player.x + dx;
    const newy = player.y + dy;
    if(maze[newy][newx]===0){
        player.x=newx;
        player.y=newy;
    }
    if(player.x===goal.x && player.y===goal.y){
        setTimeout(()=>{alert("you found me. just like always ❤️")},100);
    }
    drawmaze();
}

document.addEventListener("keydown",(e)=>{
    if(e.key==="arrowup") moveplayer(0,-1);
    if(e.key==="arrowdown") moveplayer(0,1);
    if(e.key==="arrowleft") moveplayer(-1,0);
    if(e.key==="arrowright") moveplayer(1,0);
});

drawmaze();