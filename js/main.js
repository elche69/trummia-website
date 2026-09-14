const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadowed', window.scrollY > 24);
});

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.animate-on-scroll').forEach((element) => observer.observe(element));
