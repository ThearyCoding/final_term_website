
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



document.addEventListener('DOMContentLoaded', () => {
  const slideshow = document.querySelector('.team-slideshow');
  const teamMembers = document.querySelectorAll('.team-member');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  let memberWidth = teamMembers[0].offsetWidth + 100; 

  function updateSlidePosition() {
    slideshow.style.transform = `translateX(-${currentIndex * memberWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = teamMembers.length - 1;
    }
    updateSlidePosition();
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < teamMembers.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; 
    }
    updateSlidePosition();
  });

  let startX = 0;
  let isDragging = false;

  slideshow.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  slideshow.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 50) {
      nextBtn.click(); 
      isDragging = false;
    } else if (diff < -50) {
      prevBtn.click();
      isDragging = false;
    }
  });

  slideshow.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('resize', () => {
    memberWidth = teamMembers[0].offsetWidth + 20; 
    updateSlidePosition();
  });
});
