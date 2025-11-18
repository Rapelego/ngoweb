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
   2. INTERACTIVE SLIDER
========================================= */
let currentSlide = 0;
let autoSlide;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length === 0) return;

  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  slides.forEach(s => s.style.opacity = "0");
  dots.forEach(d => d.classList.remove("active"));

  slides[currentSlide].style.opacity = "1";
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 4000);
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  startAutoSlide();

  document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    restartAuto();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    restartAuto();
  });

  document.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener("click", () => {
      currentSlide = Number(dot.dataset.slide) - 1;
      showSlide(currentSlide);
      restartAuto();
    });
  });
});

// Restart timer when user interacts
function restartAuto() {
  clearInterval(autoSlide);
  startAutoSlide();
}

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