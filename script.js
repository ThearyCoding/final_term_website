// Toggle hamburger menu and show nav links
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle the 'active' class for both hamburger and nav links
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}
// Function to display the correct page content and set the active tab
function showPage(page, element) {
  // Hide all pages
  const pages = document.querySelectorAll('.content');
  pages.forEach(function (pageElement) {
      pageElement.classList.remove('active');
  });

  // Show the selected page
  document.getElementById(page).classList.add('active');

  // Remove active class from all navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(function (navElement) {
      navElement.classList.remove('active');
  });

  // Add active class to the clicked navigation link
  element.classList.add('active');
}


let currentSlide = 0;

function showSlide(slideIndex) {
  const slides = document.querySelectorAll('.team-member');
  const totalSlides = slides.length;

  if (slideIndex >= totalSlides) {
    currentSlide = 0;
  } else if (slideIndex < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = slideIndex;
  }

  const offset = -currentSlide * 330;  // Width of each team member card + margin
  document.querySelector('.team-slideshow').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

showSlide(currentSlide);


