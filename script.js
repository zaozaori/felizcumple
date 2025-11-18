let music = document.getElementById("bg-music");
let toggle = document.querySelector(".music-toggle");
let playing = true;

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
