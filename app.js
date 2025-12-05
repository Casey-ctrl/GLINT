const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
