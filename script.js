
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navIcon = navToggle.querySelector('.icon');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
  navIcon.textContent = navLinks.classList.contains('nav-open') ? '×' : '☰';
});
