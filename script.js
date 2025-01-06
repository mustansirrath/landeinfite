let currentIndex = 0;

function slideTestimonials() {
  const sliderContainer = document.querySelector('.slider-container');
  const totalSlides = document.querySelectorAll('.testimonial-card').length;

  currentIndex = (currentIndex + 1) % totalSlides; // Increment and loop back
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Slide every 3 seconds
setInterval(slideTestimonials, 5000);

// Select elements
const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.links-side ul');

// Open the sidebar
menuBtn.addEventListener('click', function () {
    sidebar.classList.add('active');
});

// Close the sidebar
menuClose.addEventListener('click', function () {
    sidebar.classList.remove('active');
});


