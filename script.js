const images = document.querySelectorAll(".enlargeable");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modal.style.display = "block";
    document.addEventListener('keydown', handleKeydown);
}

function closeModalFunction() {
    modal.style.display = "none";
    document.removeEventListener('keydown', handleKeydown);
}

// Handle arrow navigation with keys and clicks
function navigate(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
}

// Handle keyboard navigation
function handleKeydown(event) {
    if (event.key === 'ArrowRight') {
        navigate(1);
    } else if (event.key === 'ArrowLeft') {
        navigate(-1);
    } else if (event.key === 'Escape') {
        closeModalFunction();
    }
}
