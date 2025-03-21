const sections = document.querySelectorAll('header, .section'); // Include Hero Section
const scrollDownButton = document.querySelector('.scroll-down');
let currentIndex = 0;
let isScrolling = false;

// Function to scroll to the specific section
function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        currentIndex = index; // Properly update the index
    }
}

// Scroll down button behavior
scrollDownButton.addEventListener('click', () => {
    if (currentIndex < sections.length - 1 && !isScrolling) {
        isScrolling = true;
        currentIndex++;
        scrollToSection(currentIndex);
        setTimeout(() => { isScrolling = false; }, 1000); // Reset scrolling flag after 1 second
    }
});

// Wheel scrolling behavior
window.addEventListener('wheel', (event) => {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1000); // Reset scrolling flag after 1 second

        let newIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

        if (newIndex >= 0 && newIndex < sections.length) {
            scrollToSection(newIndex);
        }
    }
});

// Arrow keys behavior (Up/Down or PageUp/PageDown)
window.addEventListener('keydown', (event) => {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1000); // Reset scrolling flag after 1 second

        let newIndex = currentIndex;

        if (event.key === 'ArrowDown' || event.key === 'PageDown') {
            newIndex++;
        } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
            newIndex--;
        }

        if (newIndex >= 0 && newIndex < sections.length) {
            scrollToSection(newIndex);
        }
    }
});
