var bgm = new Audio();
bgm.src = "./bgm.mp3";

window.addEventListener("mousemove", function() {
    bgm.play();
});