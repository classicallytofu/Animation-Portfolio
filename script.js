// JavaScript for mute/unmute functionality
const video = document.getElementById('heroVideo');
const muteButton = document.getElementById('muteButton');

muteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = '🔊';
    } else {
        video.muted = true;
        muteButton.textContent = '🔇';
    }
});