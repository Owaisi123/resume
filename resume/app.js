// Scroll-triggered Animation using Intersection Observer
const elements = document.querySelectorAll('.scroll-text, .fade-in');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Apply the fade-in and translate animation when the element comes into view
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "opacity 1s, transform 1s"; // Ensuring transition works
            observer.unobserve(entry.target); // Stop observing after animation is triggered
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Observe each element with the animation classes
elements.forEach(element => {
    observer.observe(element);
});

// Form Submission (Logs user data and refreshes the page)
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from actually submitting and reloading the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the form data (for demonstration purposes)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Display a success message
    alert('Message sent!');

    // Optionally reset the form without refreshing the page
    document.getElementById('contact-form').reset(); 
});

// Skill Progress Animation (Fill the progress bars)
window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute('data-skill');
        bar.style.width = skillLevel + '%';
        bar.style.transition = 'width 1s ease-out';  // Smooth transition when the progress bar fills
    });
});

// Hamburger Menu Toggle Functionality
const hamburgerIcon = document.getElementById('hamburger-icon');
const headerList = document.querySelector('.header-list');

// When the hamburger icon is clicked, toggle the "active" class to show/hide the menu
hamburgerIcon.addEventListener('click', () => {
    headerList.classList.toggle('active');
});

// Optionally, close the menu if a menu item is clicked (for better UX)
headerList.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        headerList.classList.remove('active');
    }
});

// Close the hamburger menu if a click occurs outside of it
document.addEventListener('click', (event) => {
    if (!headerList.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        headerList.classList.remove('active');
    }
});
