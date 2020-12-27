let audioMessage = document.querySelector('.voice audio:last-of-type')
let backgroundMusic = document.querySelector('.background-music')

if (audioMessage) {
    audioMessage.addEventListener("ended", function () {
        backgroundMusic.play();
    })
}