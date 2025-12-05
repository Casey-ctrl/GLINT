const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});


document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});
// const navLinks = document.querySelector('.nav-links');
// const links = document.querySelectorAll('.nav-links li a');
// const hamburgerClose = document.getElementById('close-btn');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('show');
// });
// hamburgerClose.addEventListener('click', ()=>{
//   navLinks.classList.remove('show');
// })

// links.forEach(link => {
//   link.addEventListener('click', () =>{
//     navLinks.classList.remove('show');
//   });
// });
