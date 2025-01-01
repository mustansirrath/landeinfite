let currentIndex = 0;

function slideTestimonials() {
  const sliderContainer = document.querySelector('.slider-container');
  const totalSlides = document.querySelectorAll('.testimonial-card').length;

  currentIndex = (currentIndex + 1) % totalSlides; // Increment and loop back
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Slide every 3 seconds
setInterval(slideTestimonials, 5000);