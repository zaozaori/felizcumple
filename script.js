// Pantalla inicial para permitir sonido
let startScreen = document.getElementById("start-audio");

startScreen.addEventListener("click", () => {
    startScreen.style.display = "none";
});

// Botón de música estético (no controla YouTube)
document.querySelector(".music-toggle").addEventListener("click", () => {
    alert("La música se controla desde el reproductor de YouTube 💗");
});
