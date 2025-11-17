/* =========================================
   1. Hamburger Menu Toggle
========================================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
}

/* =========================================
   2. Responsive Image Slider (Fade + Auto + Hover Pause)
========================================= */
let slideIndex = 0;
let slideInterval;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  // Hide all slides
  slides.forEach((slide) => slide.classList.remove("active"));

  // Move to next
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  // Show current
  slides[slideIndex - 1].classList.add("active");
}

// Start slider on load
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  slides[0].classList.add("active"); // show first image
  slideInterval = setInterval(showSlides, 4000);

  // Pause on hover
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
    slider.addEventListener("mouseleave", () => {
      slideInterval = setInterval(showSlides, 4000);
    });
  }
});

/* =========================================
   3. Form Validation (Contact & Volunteer)
========================================= */
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"], [name="fullname"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="message"]');

    let valid = true;
    let errorMessage = "";

    if (!name || !name.value.trim()) {
      valid = false;
      errorMessage += " Please enter your name.\n";
    }
    if (!email || !email.value.includes("@")) {
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
      alert("✅ Thank you! Your message has been submitted successfully.");
      form.reset();
    }
  });
}

validateForm("contactForm");
validateForm("volunteerForm");

/* =========================================
   4. Fade-In Animation for Sections (on Scroll)
========================================= */
document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeSections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    observer.observe(section);
  });
});

/* =========================================
   5. Page Search Function
========================================= */
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const term = this.value.toLowerCase();
    const sections = document.querySelectorAll("h1, h2, h3, p, li");

    searchResults.innerHTML = "";
    searchResults.style.display = "none";

    if (term.length < 2) return; // Only search after 2 characters

    let matches = [];

    sections.forEach((el) => {
      const text = el.textContent.toLowerCase();

      if (text.includes(term)) {
        matches.push({
          text: el.textContent,
          element: el
        });
      }
    });

    if (matches.length > 0) {
      searchResults.style.display = "block";

      matches.slice(0, 8).forEach((match) => {
        const div = document.createElement("div");
        div.textContent = match.text;

        // When clicked → scroll & highlight
        div.addEventListener("click", () => {
          match.element.scrollIntoView({ behavior: "smooth", block: "center" });

          // Flash highlight
          match.element.style.backgroundColor = "yellow";
          setTimeout(() => {
            match.element.style.backgroundColor = "transparent";
          }, 1500);

          searchResults.style.display = "none";
          searchInput.value = "";
        });

        searchResults.appendChild(div);
      });
    }
  });

  // Hide dropdown on click outside
  document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) &&
        !searchResults.contains(event.target)) {
      searchResults.style.display = "none";
    }
  });
}