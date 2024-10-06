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

function autoSlide() {
  const slides = document.querySelectorAll('.team-member');
  const totalSlides = slides.length;
  const teamSlideshow = document.querySelector('.team-slideshow');

  currentSlide = (currentSlide + 1) % totalSlides;

  const offset = -currentSlide * 340;  // Adjust based on the card width + margin
  teamSlideshow.style.transform = `translateX(${offset}px)`;
}

setInterval(autoSlide, 4000); // Auto slide every 4 seconds
