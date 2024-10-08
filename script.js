
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');


  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}


function showPage(page, element) {
  const pages = document.querySelectorAll('.content');
  pages.forEach(function (pageElement) {
      pageElement.classList.remove('active');
  });

  document.getElementById(page).classList.add('active');


  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(function (navElement) {
      navElement.classList.remove('active');
  });


  element.classList.add('active');
}

let currentSlide = 0;

function autoSlide() {
  const slides = document.querySelectorAll('.team-member');
  const totalSlides = slides.length;
  const teamSlideshow = document.querySelector('.team-slideshow');

  currentSlide = (currentSlide + 1) % totalSlides;

  const offset = -currentSlide * 340;  
  teamSlideshow.style.transform = `translateX(${offset}px)`;
}

setInterval(autoSlide, 4000); 
