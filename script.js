// Pantalla inicial para desbloquear música
let startScreen = document.getElementById("start-audio");
startScreen.addEventListener("click", () => {
    startScreen.style.display = "none";
});

// Botón de música estético
document.querySelector(".music-toggle").addEventListener("click", () => {
    alert("La música se controla desde el reproductor de YouTube 💗");
});

// Carta sorpresa
const letter = document.getElementById("letter");
letter.addEventListener("click", () => {
    letter.classList.toggle("flipped");
});

// Fondo de flores
const canvas = document.getElementById("flower-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Flower {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 4;
        this.speed = Math.random() * 1 + 0.5;
        this.color = `rgba(255, ${100+Math.random()*100}, 200, 0.8)`;
    }
    update() {
        this.y += this.speed;
        if(this.y > canvas.height) this.y = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const flowers = [];
for(let i=0; i<70; i++) flowers.push(new Flower());

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    flowers.forEach(f => { f.update(); f.draw(); });
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
