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

// Carrusel mágico con autoplay y corazones
const trackMagic = document.querySelector('.carousel-track');
const slidesMagic = Array.from(trackMagic.children);
const nextButtonMagic = document.querySelector('.next');
const prevButtonMagic = document.querySelector('.prev');
const heartsContainer = document.getElementById('hearts-container');

let currentIndexMagic = 0;

function updateSlideMagic() {
    const slideWidth = slidesMagic[0].getBoundingClientRect().width;
    trackMagic.style.transform = 'translateX(-' + slideWidth * currentIndexMagic + 'px)';
    // Generar corazones al cambiar de imagen
    for(let i=0;i<15;i++){
        createHeart();
    }
}

function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random()*90 + 'vw';
    heart.style.top = Math.random()*50 + 'vh';
    heart.style.width = 15 + Math.random()*15 + 'px';
    heart.style.height = heart.style.width;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
}

// Botones
nextButtonMagic.addEventListener('click', () => {
    currentIndexMagic++;
    if(currentIndexMagic >= slidesMagic.length) currentIndexMagic = 0;
    updateSlideMagic();
});

prevButtonMagic.addEventListener('click', () => {
    currentIndexMagic--;
    if(currentIndexMagic < 0) currentIndexMagic = slidesMagic.length - 1;
    updateSlideMagic();
});

// Autoplay cada 4 segundos
setInterval(() => {
    currentIndexMagic++;
    if(currentIndexMagic >= slidesMagic.length) currentIndexMagic = 0;
    updateSlideMagic();
}, 4000);

window.addEventListener('resize', updateSlideMagic);

// Inicializar
updateSlideMagic();

