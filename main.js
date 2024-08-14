// Select the toggle button and the navigation menu
const toggleMenu = document.querySelector('.toggle-menu');
const navMenu = document.querySelector('.nav-menu ul');

// Toggle the menu when the toggle button is clicked
toggleMenu.addEventListener('click', function(event) {
    navMenu.classList.toggle('show');
    event.stopPropagation(); // Prevent the click event from propagating to the document
});

// Hide the menu when clicking anywhere else on the document
document.addEventListener('click', function(event) {
    if (navMenu.classList.contains('show') && !navMenu.contains(event.target)) {
        navMenu.classList.remove('show');
    }
});
// end header
let currentIndex = 0;

function moveSlide(step) {
    const slider = document.getElementById('slider');
    const slides = slider.children;
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
// test
 // Get all links in the nav menu
        const navLinks = document.querySelectorAll('.nav-menu ul li a');

        // Loop through each link
        navLinks.forEach(link => {
            // Add an event listener for the 'click' event
            link.addEventListener('click', function() {
                // Remove 'active' class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add 'active' class to the clicked link
                this.classList.add('active');
            });
        });
