// ==========================
// DARK / LIGHT MODE TOGGLE
// ==========================
const toggleMode = document.getElementById('toggleMode');
const body = document.body;

// Check for saved mode preference or default to light mode
const savedMode = localStorage.getItem('themeMode');
if (savedMode === 'dark') {
    body.classList.remove('light-mode');
    toggleMode.textContent = 'Light Mode';
} else {
    body.classList.add('light-mode');
    toggleMode.textContent = 'Dark Mode';
}

// Toggle mode on button click
toggleMode.addEventListener('click', () => {
    const isLightMode = body.classList.toggle('light-mode');
    toggleMode.textContent = isLightMode ? 'Dark Mode' : 'Light Mode';
    localStorage.setItem('themeMode', isLightMode ? 'light' : 'dark');
});

// ==========================
// SMOOTH SCROLL
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================
// FADE-UP ANIMATION ON SCROLL
// ==========================
const fadeElements = document.querySelectorAll('.fade-up');
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// ==========================
// BACK TO TOP BUTTON
// ==========================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================
// HAMBURGER MENU TOGGLE (MOBILE)
// ==========================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a navigation link
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 980) {
            nav.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('show');
        hamburger.classList.remove('active');
    }
});

// ==========================
// HEADER SCROLL EFFECT
// ==========================
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 100) {
        header.style.boxShadow = 'var(--shadow)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
