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
const prevButton = document.getElementsByClassName("prev")[0];
const nextButton = document.getElementsByClassName("next")[0];
const images = document.querySelectorAll(".enlargeable");  // Collect all enlargeable images
let currentIndex = 0;  // Track the current image index

// Function to open modal and set image
function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; // Disable scrolling
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
    document.body.style.overflow = 'auto'; // Enable scrolling
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

// Add click event listeners for navigation buttons
prevButton.addEventListener('click', () => navigate(-1));
nextButton.addEventListener('click', () => navigate(1));

// Add swipe functionality for mobile
let touchStartX = 0;
let touchEndX = 0;

modalImage.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

modalImage.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX) {
        navigate(1);  // Swipe left to navigate to next image
    } else if (touchEndX > touchStartX) {
        navigate(-1);  // Swipe right to navigate to previous image
    }
}

// Modal functionality for image enlargement on crowns-details page
const crownsImages = document.querySelectorAll(".gallery-grid .enlargeable");  // Collect all enlargeable images on crowns-details page

// Function to open modal and set image for crowns-details page
function openCrownsModal(index) {
    currentIndex = index;
    modalImage.src = crownsImages[currentIndex].src;
    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; // Disable scrolling
    document.addEventListener('keydown', handleCrownsKeydown);  // Add keyboard navigation
}

// Add click event listeners to enlargeable images on crowns-details page
crownsImages.forEach((img, index) => {
    img.addEventListener('click', () => openCrownsModal(index));
});

// Handle arrow key navigation and Escape key for modal on crowns-details page
function handleCrownsKeydown(event) {
    if (event.key === 'ArrowRight') {
        navigateCrowns(1);  // Move to next image
    } else if (event.key === 'ArrowLeft') {
        navigateCrowns(-1);  // Move to previous image
    } else if (event.key === 'Escape') {
        closeModalFunction();  // Close modal on Escape key
    }
}

// Navigate between images on crowns-details page
function navigateCrowns(direction) {
    currentIndex = (currentIndex + direction + crownsImages.length) % crownsImages.length;
    modalImage.src = crownsImages[currentIndex].src;
}

// Add click event listeners for navigation buttons on crowns-details page
prevButton.addEventListener('click', () => navigateCrowns(-1));
nextButton.addEventListener('click', () => navigateCrowns(1));

// Add swipe functionality for mobile on crowns-details page
modalImage.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

modalImage.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleCrownsSwipe();
});

function handleCrownsSwipe() {
    if (touchEndX < touchStartX) {
        navigateCrowns(1);  // Swipe left to navigate to next image
    } else if (touchEndX > touchStartX) {
        navigateCrowns(-1);  // Swipe right to navigate to previous image
    }
}
