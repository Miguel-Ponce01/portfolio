// Loaded dynamic portfolio data from external files (projects.js, certificates.js)

// ==========================
// DYNAMIC RENDERING ENGINE
// ==========================

// Render Projects to Grid
function renderProjects(filter = 'all') {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = '';
  
  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);
    
  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card fade-up show';
    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p class="project-tech">${project.tech.slice(0, 4).join(' · ')}</p>
        <div class="project-actions">
          <button class="view-details-btn" data-id="${project.id}">
            Learn More <i class="fas fa-info-circle"></i>
          </button>
          <a href="${project.demoUrl}" target="_blank" class="project-link">
            Demo <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(card);
  });

  // Attach Detail Handlers
  projectsGrid.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openProjectModal(btn.getAttribute('data-id'));
    });
  });
}

// Render Certificates to Grid
function renderCertificates(filter = 'all') {
  const certificatesGrid = document.getElementById('certificatesGrid');
  if (!certificatesGrid) return;
  
  certificatesGrid.innerHTML = '';
  
  const filtered = filter === 'all'
    ? certificatesData
    : certificatesData.filter(c => c.category === filter);
    
  filtered.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card fade-up show';
    card.innerHTML = `
      <div class="cert-image-container" data-id="${cert.id}">
        <img src="${cert.image}" alt="${cert.title}" loading="lazy" />
        <div class="cert-overlay">
          <i class="fas fa-expand"></i>
          <span>View Badge</span>
        </div>
      </div>
      <div class="cert-details">
        <span class="cert-date">${cert.date}</span>
        <h4>${cert.title}</h4>
        <p class="cert-issuer">${cert.issuer}</p>
        <p class="cert-description">${cert.description}</p>
        ${cert.verifyUrl ? `
          <a href="${cert.verifyUrl}" target="_blank" class="cert-verify-link">
            Verify Certificate <i class="fas fa-external-link-alt"></i>
          </a>
        ` : ''}
      </div>
    `;
    certificatesGrid.appendChild(card);
  });

  // Attach Lightbox Handlers
  certificatesGrid.querySelectorAll('.cert-image-container').forEach(container => {
    container.addEventListener('click', () => {
      openLightbox(container.getAttribute('data-id'));
    });
  });
}

// ==========================
// MODAL SYSTEM ACTIONS
// ==========================

// Project Detail Modal
function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;
  
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  
  modal.querySelector('.modal-title').textContent = project.title;
  modal.querySelector('.modal-subtitle').textContent = project.subtitle || '';
  modal.querySelector('.modal-image img').src = project.image;
  modal.querySelector('.modal-description').textContent = project.longDescription;
  
  // Render Tech Tags
  const techContainer = modal.querySelector('.modal-tech-tags');
  techContainer.innerHTML = '';
  project.tech.forEach(t => {
    const tag = document.createElement('span');
    tag.className = 'tech-tag';
    tag.textContent = t;
    techContainer.appendChild(tag);
  });
  
  // Configure Buttons
  const githubBtn = modal.querySelector('.modal-github-btn');
  const demoBtn = modal.querySelector('.modal-demo-btn');
  
  if (project.githubUrl) {
    githubBtn.href = project.githubUrl;
    githubBtn.style.display = 'inline-flex';
  } else {
    githubBtn.style.display = 'none';
  }
  
  if (project.demoUrl) {
    demoBtn.href = project.demoUrl;
    demoBtn.style.display = 'inline-flex';
  } else {
    demoBtn.style.display = 'none';
  }
  
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Certificate Lightbox
function openLightbox(id) {
  const cert = certificatesData.find(c => c.id === id);
  if (!cert) return;
  
  const lightbox = document.getElementById('lightboxModal');
  if (!lightbox) return;
  
  lightbox.querySelector('.lightbox-img').src = cert.image;
  lightbox.querySelector('.lightbox-caption').textContent = `${cert.title} — Issued by ${cert.issuer}`;
  
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  if (lightbox) {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Global modal close handlers
window.closeProjectModal = closeProjectModal;
window.closeLightbox = closeLightbox;

// Escape key to close active modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeLightbox();
  }
});

// ==========================
// SCROLL SPY & INDICATORS
// ==========================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
const header = document.querySelector('header');
const scrollProgressBar = document.getElementById('scrollProgressBar');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  // 1. Header Scroll Shadow & Padding
  if (currentScroll > 50) {
    header.style.padding = '15px 0';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.padding = '20px 0';
    header.style.boxShadow = 'none';
  }
  
  // 2. Scroll Progress Bar
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (totalHeight > 0) {
    const progressPercentage = (currentScroll / totalHeight) * 100;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = progressPercentage + '%';
    }
  }

  // 3. Scroll Spy Navigation Highlight
  let currentSectionId = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const headerHeight = header.offsetHeight;
    if (currentScroll >= sectionTop - headerHeight - 20) {
      currentSectionId = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSectionId) {
      link.classList.add('active');
    }
  });
});

// ==========================
// SMOOTH SCROLL ROUTER
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = header.offsetHeight;
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
// DARK / LIGHT MODE TOGGLE
// ==========================
const toggleMode = document.getElementById('toggleMode');
if (toggleMode) {
  const icon = toggleMode.querySelector('i');
  
  const savedMode = localStorage.getItem('themeMode') || 'dark';
  if (savedMode === 'light') {
    document.body.classList.add('light-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.body.classList.remove('light-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
  }
  
  toggleMode.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    if (isLight) {
      icon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('themeMode', 'light');
    } else {
      icon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('themeMode', 'dark');
    }
  });
}

// ==========================
// HAMBURGER MENU TOGGLE
// ==========================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    hamburger.classList.toggle('active');
  });

  // Close menu when clicking navigation links
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
}

// ==========================
// TYPING EFFECT
// ==========================
const typingText = document.querySelector('.typing-text');
if (typingText) {
  const texts = ['Junior Full-Stack Developer', 'UI/UX Designer', 'Database Analyst'];
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
      typingSpeed = 2000; // Delay before starting to delete
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ==========================
// Intersection Observer (FADES)
// ==========================
const fadeElements = document.querySelectorAll('.fade-up');
if (fadeElements.length > 0) {
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
}

// ==========================
// BACK TO TOP BUTTON
// ==========================
const backToTopButton = document.getElementById('backToTop');
if (backToTopButton) {
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
}

// ==========================
// DYNAMIC CUSTOM CURSOR
// ==========================
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Cursor style rules
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
  .cursor {
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.08s ease;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 768px) {
    .cursor {
      display: none;
    }
  }
`;
document.head.appendChild(cursorStyle);

// ==========================
// FILTER BUTTON EVENT SETUP
// ==========================
function initFilters() {
  const filterContainers = document.querySelectorAll('.filter-container');
  filterContainers.forEach(container => {
    const buttons = container.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Toggle active style
        container.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');
        
        const filterVal = button.getAttribute('data-filter');
        const section = button.closest('section');
        const sectionId = section.getAttribute('id');
        
        if (sectionId === 'projects') {
          renderProjects(filterVal);
        } else if (sectionId === 'certificates') {
          renderCertificates(filterVal);
        }
      });
    });
  });
}

// Accordion Toggle Handlers
function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const isExpanded = item.classList.contains('active');
      
      // Close other accordions
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-body').style.maxHeight = null;
      });

      if (!isExpanded) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

// Initialize rendering and filtering on load
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderCertificates();
  initFilters();
  initAccordions();
});
// Fallback if DOMContentLoaded already fired
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  renderProjects();
  renderCertificates();
  initFilters();
  initAccordions();
}
