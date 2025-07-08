// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');

function setDarkMode(enabled) {
    document.body.classList.toggle('dark-mode', enabled);
    localStorage.setItem('theme', enabled ? 'dark' : 'light');
    toggleBtn.textContent = enabled ? '☀️' : '🌙';
}

// Initial theme
if (storedTheme) {
    setDarkMode(storedTheme === 'dark');
} else {
    setDarkMode(prefersDark);
}

toggleBtn.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark-mode'));
});

// Animate sections on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);
sections.forEach(section => {
    observer.observe(section);
});
