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

// Get the modal and image elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementsByClassName("close")[0];

// Loop through all enlargeable images and add click event
document.querySelectorAll(".enlargeable").forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImage.src = this.src;
    }
});

// When the close button is clicked, hide the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Hide modal on click outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
