document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    // Function to apply the saved theme
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
            modeToggle.textContent = '🌙'; // Moon for dark mode
        } else {
            body.classList.remove('light-mode');
            modeToggle.textContent = '💡'; // Lightbulb for light mode
        }
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    // Toggle theme on button click
    modeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
            modeToggle.textContent = '💡';
        } else {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            modeToggle.textContent = '🌙';
        }
    });

    // Toggle hamburger menu
    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('is-active');
    });
});