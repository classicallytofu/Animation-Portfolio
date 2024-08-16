document.addEventListener("DOMContentLoaded", function() {
    const wiimoteCount = 2; // Number of Wiimotes to be placed
    const body = document.body;
    const sections = document.querySelectorAll("#about, #contact");

    sections.forEach(section => {
        for (let i = 0; i < wiimoteCount; i++) {
            const wiimote = document.createElement("img");
            wiimote.src = "Assets/wiimote.png"; // Make sure this file is in the Assets folder
            wiimote.classList.add("wiimote");

            // Larger size for specific sections
            const size = Math.floor(Math.random() * 100) + 100;
            wiimote.style.width = size + "px";

            // Random rotation between -45deg and 45deg
             const rotation = Math.floor(Math.random() * 90) - 45;
             wiimote.style.transform = `rotate(${rotation}deg)`;

            // Random position within the section
            const rect = section.getBoundingClientRect();
            const randomX = Math.floor(Math.random() * (rect.width - size));
            const randomY = Math.floor(Math.random() * (rect.height - size));
            wiimote.style.position = "absolute";
            wiimote.style.left = randomX + "px";
            wiimote.style.top = randomY + "px";

            section.appendChild(wiimote);
        }
    });

    // Re-enable scrolling
    body.style.overflow = "auto";
});