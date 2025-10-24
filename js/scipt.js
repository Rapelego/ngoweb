/* =========================================
   1. Hamburger Menu Toggle
========================================= */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });
}

/* =========================================
   2. Responsive Image Slider (with Fade Effect)
========================================= */
let slideIndex = 0;
let slideTimer;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  slides.forEach((slide) => (slide.style.opacity = "0"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.opacity = "1";

  // Automatically change every 4 seconds
  slideTimer = setTimeout(showSlides, 4000);
}

// Pause on hover (optional, adds a nice touch)
const slider = document.querySelector(".slider");
if (slider) {
  slider.addEventListener("mouseenter", () => clearTimeout(slideTimer));
  slider.addEventListener("mouseleave", showSlides);
}

window.addEventListener("DOMContentLoaded", showSlides);

/* =========================================
   3. Form Validation (Contact & Volunteer)
========================================= */
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default submission

    const name = form.querySelector('[name="name"], [name="fullname"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    let valid = true;
    let errorMessage = "";

    if (!name || !name.value.trim()) {
      valid = false;
      errorMessage += " Please enter your name.\n";
    }

    if (!email || !email.value.includes('@')) {
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

/* =========================================
   4. Fade-In Animation for Sections 
========================================= */
document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".fade-section");

  fadeSections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 1s ease-out, transform 1s ease-out";

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 300 * (index + 1));
  });
});
