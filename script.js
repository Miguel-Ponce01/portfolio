// Dark / Light Arcade Mode
const toggleMode = document.getElementById('toggleMode');
const body = document.body;
if(localStorage.getItem('arcadeMode') === 'light') body.classList.add('light-mode'), toggleMode.textContent='Dark Mode';
else toggleMode.textContent='Light Mode';
toggleMode.addEventListener('click', ()=>{
  const isLight = body.classList.toggle('light-mode');
  toggleMode.textContent = isLight ? 'Dark Mode' : 'Light Mode';
  localStorage.setItem('arcadeMode', isLight ? 'light' : 'dark');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e=>{
  const href = a.getAttribute('href');
  if(href.startsWith('#')){ e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'}); }
}));

// Fade-up animation
const faders = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('show'); io.unobserve(en.target);}});},{threshold:0.18});
faders.forEach(f=>io.observe(f));

// Back to top
const back = document.getElementById('backToTop');
window.addEventListener('scroll', ()=>{back.style.display = window.scrollY > 360 ? 'flex' : 'none';});
back.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('mainNav');
hamburger.addEventListener('click', ()=>{
  nav.style.display = nav.style.display==='flex' ? 'none':'flex';
  nav.style.flexDirection='column';
  nav.style.position='absolute';
  nav.style.top='76px';
  nav.style.right='22px';
  nav.style.background='var(--card)';
  nav.style.padding='12px';
  nav.style.borderRadius='10px';
  nav.style.boxShadow='var(--glow)';
});
