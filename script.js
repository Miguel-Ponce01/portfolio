// ==========================
// NAVIGATION ACTIVE STATE
// ==========================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ==========================
// DARK / LIGHT MODE TOGGLE
// ==========================
const toggleMode = document.getElementById('toggleMode');
const body = document.body;
const icon = toggleMode.querySelector('i');

// Check for saved mode preference, default to dark
const savedMode = localStorage.getItem('themeMode') || 'dark';
if (savedMode === 'light') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
} else {
    body.classList.remove('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Toggle mode on button click
toggleMode.addEventListener('click', () => {
    const isLightMode = body.classList.toggle('light-mode');
    
    if (isLightMode) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('themeMode', 'light');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('themeMode', 'dark');
    }
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
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==========================
// TYPING EFFECT
// ==========================
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const texts = ['Full-Stack Developer', 'BSIS Student', 'Web Designer', 'Problem Solver'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ==========================
// FADE-UP ANIMATION ON SCROLL
// ==========================
const fadeElements = document.querySelectorAll('.fade-up');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
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
    if (window.scrollY > 500) {
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
        if (window.innerWidth <= 768) {
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
    
    if (currentScroll > 50) {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==========================
// CURSOR EFFECT (OPTIONAL)
// ==========================
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add cursor styles dynamically
const style = document.createElement('style');
style.textContent = `
    .cursor {
        width: 20px;
        height: 20px;
        border: 2px solid var(--accent);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        transform: translate(-50%, -50%);
    }
    
    @media (max-width: 768px) {
        .cursor {
            display: none;
        }
    }
`;
document.head.appendChild(style);
