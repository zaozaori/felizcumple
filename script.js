let music = document.getElementById("bg-music");
let toggle = document.querySelector(".music-toggle");
let startScreen = document.getElementById("start-audio");
let playing = false;

// El usuario inicia la música con un toque/click
startScreen.addEventListener("click", () => {
    music.play().then(() => {
        playing = true;
        toggle.textContent = "🔇";
        startScreen.style.display = "none";
    });
});

// Control manual del botón de música
function toggleMusic() {
    if (playing) {
        music.pause();
        toggle.textContent = "🔊";
    } else {
        music.play();
        toggle.textContent = "🔇";
    }
    playing = !playing;
}

