

//  1. Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });
}

//  2. Simple Image Slider for Programmes Page
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.display = (index === slideIndex) ? 'block' : 'none';
  });
  slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlides, 4000); // Change every 4 seconds

//  3. Form Validation (Contact & Volunteer)
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default submission

    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    let valid = true;
    let errorMessage = "";

    if (!name.value.trim()) {
      valid = false;
      errorMessage += " Please enter your name.\n";
    }
    if (!email.value.includes('@')) {
      valid = false;
      errorMessage += " Please enter a valid email address.\n";
    }
    if (message && message.value.trim().length < 5) {
      valid = false;
      errorMessage += " Please enter a longer message.\n";
    }

    if (!valid) {
      alert(errorMessage);
    } else {
      alert(" Thank you! Your message has been submitted successfully.");
      form.reset();
    }
  });
}

// Apply validation to both forms
validateForm("contactForm");
validateForm("volunteerForm");
