// Mute/Unmute functionality for hero video
const video = document.getElementById('heroVideo');
const muteButton = document.getElementById('muteButton');

muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? '🔇' : '🔊';
});

// Modal functionality for image enlargement
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementsByClassName("close")[0];
const images = document.querySelectorAll(".enlargeable");  // Collect all enlargeable images
let currentIndex = 0;  // Track the current image index

// Function to open modal and set image
function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modal.style.display = "block";
    document.addEventListener('keydown', handleKeydown);  // Add keyboard navigation
}

// Add click event listeners to enlargeable images
images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
});

// Close modal on close button click
closeModal.addEventListener('click', () => {
    closeModalFunction();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModalFunction();
    }
});

// Close modal function
function closeModalFunction() {
    modal.style.display = "none";
    document.removeEventListener('keydown', handleKeydown);  // Remove keyboard navigation listener
}

// Handle arrow key navigation and Escape key for modal
function handleKeydown(event) {
    if (event.key === 'ArrowRight') {
        navigate(1);  // Move to next image
    } else if (event.key === 'ArrowLeft') {
        navigate(-1);  // Move to previous image
    } else if (event.key === 'Escape') {
        closeModalFunction();  // Close modal on Escape key
    }
}

// Navigate between images
function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
}
