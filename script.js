// ==========================
// DARK / LIGHT ARCADE MODE
// ==========================
const toggleMode = document.getElementById('toggleMode');
const body = document.body;

// Set initial mode from localStorage
if(localStorage.getItem('arcadeMode') === 'light') {
    body.classList.add('light-mode');
    toggleMode.textContent = 'Dark Mode';
} else {
    body.classList.remove('light-mode');
    toggleMode.textContent = 'Light Mode';
}

// Toggle on click
toggleMode.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-mode');
    toggleMode.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    localStorage.setItem('arcadeMode', isLight ? 'light' : 'dark');
});

// ==========================
// SMOOTH SCROLL
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if(href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
        }
    });
});

// ==========================
// FADE-UP ANIMATION
// ==========================
const faders = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.18 });

faders.forEach(f => io.observe(f));

// ==========================
// BACK TO TOP BUTTON
// ==========================
const back = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    back.style.display = window.scrollY > 360 ? 'flex' : 'none';
});
back.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================
// HAMBURGER MENU TOGGLE
// ==========================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show'); // Use CSS "show" class for responsive menu
});

// OPTIONAL: Close menu when clicking a link (for mobile)
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768) nav.classList.remove('show');
    });
});
