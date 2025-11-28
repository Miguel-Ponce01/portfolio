/* ---------------------------------------------
   DARK MODE TOGGLE
--------------------------------------------- */
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

/* ---------------------------------------------
   SMOOTH FADE-UP ANIMATIONS
--------------------------------------------- */
const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));

/* ---------------------------------------------
   BACK TO TOP BUTTON
--------------------------------------------- */
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------------------------------------------
   MOBILE HAMBURGER MENU
--------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("open");
});

/* Optional animation for hamburger icon */
hamburger.addEventListener("click", () => {
  const bars = hamburger.querySelectorAll("div");
  bars[0].classList.toggle("rotate-down");
  bars[1].classList.toggle("hide");
  bars[2].classList.toggle("rotate-up");
});
