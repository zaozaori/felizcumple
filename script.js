// Pantalla inicial para desbloquear música
let startScreen = document.getElementById("start-audio");
startScreen.addEventListener("click", () => {
    startScreen.style.display = "none";
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
    animateParticles();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Partículas rosas al click
let particles = [];
document.body.addEventListener('click', (e) => {
    for(let i=0;i<10;i++){
        particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random()*5+3,
            speedX: (Math.random()-0.5)*3,
            speedY: (Math.random()-1.5)*3,
            color: `rgba(255, ${100+Math.random()*100}, 200, 1)`,
            life: 60
        });
    }
});

function animateParticles(){
    for(let i=0;i<particles.length;i++){
        let p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.fill();
        if(p.life<=0) particles.splice(i,1);
    }
}

// Mensajes tipo chat secuenciales
const chatBox = document.getElementById("chat-box");
const messages = [
    "Feliz cumpleaños, mi amor 💗",
    "Gracias por llenar mi vida de color rosa 🌸",
    "Te extraño y pienso en ti siempre 🍓",
    "Muy pronto estaremos juntos 😘",
    "Eres mi persona favorita 💖",
    "Te amo más cada día 💗✨"
];

let i = 0;
function showMessage(){
    if(i >= messages.length) return;
    const div = document.createElement("div");
    div.classList.add("chat-message");
    div.textContent = messages[i];
    chatBox.appendChild(div);
    i++;
    setTimeout(showMessage, 2000);
}

showMessage();

// Carrusel de imágenes
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    if(currentIndex >= slides.length) currentIndex = 0;
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 0) currentIndex = slides.length - 1;
    updateSlidePosition();
});

window.addEventListener('resize', updateSlidePosition);

animate();
