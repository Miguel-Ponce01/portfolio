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
    
    // Adjusted offset for smoother triggering on scroll
    if (window.scrollY >= sectionTop - 150) {
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

// Default to dark mode as per the user's sleek portfolio preference
const savedMode = localStorage.getItem('themeMode') || 'dark';
if (savedMode === 'light') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

toggleMode.addEventListener('click', () => {
    const isLightMode = body.classList.toggle('light-mode');
    
    if (isLightMode) {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('themeMode', 'light');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('themeMode', 'dark');
    }
});

// ==========================
// TYPING EFFECT (UPDATED)
// ==========================
const typingText = document.querySelector('.typing-text');
if (typingText) {
    // Updated strings to reflect your academic background at MMCM
    const texts = [
        'Full-Stack Developer', 
        'Information Systems Student', 
        'Web Designer', 
        'Problem Solver'
    ];
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
            typingSpeed = 2000; // Pause at the end of the word
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
// FADE-UP ANIMATION (Intersection Observer)
// ==========================
// This automatically applies to your new KhenzoVan project card
const fadeElements = document.querySelectorAll('.fade-up');
const observerOptions = {
    threshold: 0.15,
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
// BACK TO TOP & HEADER EFFECTS
// ==========================
const backToTopButton = document.getElementById('backToTop');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Show back to top button
    backToTopButton.style.display = window.scrollY > 500 ? 'flex' : 'none';

    // Header scroll compression
    if (window.scrollY > 50) {
        header.style.padding = '12px 0';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================
// MOBILE MENU LOGIC
// ==========================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });
}
