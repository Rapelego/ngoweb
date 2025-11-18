# ngoweb
initially for part 1 i had submitted two websites whereas i only had to submit one from the approved proposal. now for part 2 i am submitting website for the approved proposal(aftercare).

# Bright Futures Aftercare Website – Part 2  

## 📌 Project Overview  
This project is part of my Web Development PoE. The goal is to design and develop a responsive website for **Bright Futures Aftercare**, a non-profit organisation that provides academic support, literacy programmes, sports, and nutritious meals for children aged 7–13.  

Part 2 focused on implementing **CSS styling and responsive design** to improve user experience across devices.  

---

## 🚀 Features Implemented in Part 2  
- Centralized `style.css` file for consistent styling across all pages  
- Modern navigation bar with hover and active states  
- Responsive **menu** for mobile devices  
- Hero section with background logo on the home page  
- Logo placed on the top-left navigation across all other pages  
- Offer grid section styled into **image-backed boxes** (ready for background images)  
- Consistent design across Home, About, Programmes, Volunteer, and Contact pages  
- Forms styled with input focus effects, shadows, and rounded corners  
- Media queries for **laptops, tablets, and phones**  

---
Part 3 – Change Log (JavaScript, SEO & Enhancements)

This section documents all updates made during Part 3 of the WEDE5020 PoE.
It includes JavaScript additions, SEO improvements, animations, responsive enhancements, and UI fixes applied across the entire Bright Futures AfterCare website.

1. JavaScript Implementation
1.1 Added Dynamic Hamburger Navigation

Implemented .menu-toggle JavaScript toggle.

Enables open/close animation of the mobile menu.

Navigation links slide in/out using the .active class.

Improves site responsiveness on mobile and tablets.

1.2 Added Automatic Image Slider (Programmes Page)

Created a fully responsive fade-in image slider.

Features added:

Automatic cycling every 4 seconds.

Fade transition effect for smooth visual experience.

Slider pauses on mouse hover.

Slider resumes when mouse leaves.

Fixed display issue by switching from display:none to opacity transitions.

1.3 Added Form Validation (Contact & Volunteer Forms)

Validates the following:

Required name field

Valid email format

Message length (minimum 5 characters)

Prevents submission if fields are incorrect.

Displays user-friendly alerts for form errors.

Resets form on successful validation.

1.4 Added Fade-In Animation for Page Sections

Sections marked .fade-section now:

Fade in one by one

Slide upward slightly

Load with a staggered delay for a clean effect

Enhances modern feel and visual engagement.

2. CSS & UI Enhancements for JS Support
2.1 Updated Slider CSS

Added opacity-based animation for smooth fades.

Ensured slider maintains proportions using:

aspect-ratio: 16/9, 4/3, and 1/1 for mobile.

Forced first slide to load as visible.

Updated object-fit: cover for clean image scaling.

2.2 Improved Mobile Navigation Layout

Ensured hamburger icon appears only below 768px.

Made mobile nav slide in from left.

Added transition animations for menu toggle bars.

3. SEO Improvements Added in Part 3
3.1 Added Standard SEO Meta Tags to Every Page

<meta name="description">

<meta name="keywords">

<meta name="author">

<meta name="viewport">

These improve:

Search engine discoverability

Page indexing

Mobile optimization

3.2 Improved Image Accessibility

Added descriptive and readable alt="" text to:

Hero images

Programme images

Logos

Slider images

SEO benefit: improves image ranking + accessibility.

3.3 Semantic HTML Validation

Updated the structure across pages to ensure proper:

<header>

<nav>

<main>

<section>

<footer>

This helps search engines understand page hierarchy.

4. Accessibility Improvements
4.1 Improved Alt Text for All Images

Ensures screen readers can understand important visuals.

4.2 Increased Form Usability

Added focus styling to form inputs:

Blue highlight on selected fields

Better keyboard navigation

4.3 Improved Color Contrast

Ensured readable contrast on:

Buttons

Navigation links

Section headers

5. Contact Page Enhancements
5.1 Added Google Maps Embed

Added <iframe> map for the organisation’s physical location.

Map container styled responsively.

Improves trust and user navigation.

6. Bug Fixes Completed During Part 3
6.1 Image Slider Not Displaying

Issue: images stacked on top of each other.

Fix: updated JS to use opacity instead of display:none.

Fix: ensured .slide:first-child is visible on load.

Fix: corrected incorrect filename (Reading.jpg vs reading.jpg).

6.2 Hamburger Menu Not Toggling

Issue: missing <span> bars in HTML.

Fix: added three span elements to .menu-toggle.

6.3 Form Validation Not Triggering

Issue: form IDs did not match JS selectors.

Fix: updated JS to accept [name="fullname"] as alternative.

7. Files Updated in Part 3
File	Purpose
js/script.js	All JavaScript features, slider, animations, menu toggle, validation
style.css	Slider animation, responsive design, map styling, hamburger icon
index.html	SEO tags + fade-section hooks
about.html	SEO tags + content improvements
programmes.html	Slider + SEO tags
volunteer.html	Form validation hooks + SEO
contact.html	Map embed + SEO tags

 Conclusion

All Part 3 requirements were completed successfully, including JavaScript interactivity, responsive improvements, SEO enhancement, accessibility upgrades, and bug fixes.
The website is now more dynamic, professional, mobile-friendly, and search-engine optimized.

Reference List
Google Maps

Google. (2025) Google Maps. Available at: https://maps.google.com
 (Accessed: 18 November 2025).

Unsplash – Stock Images

(Use these only if you downloaded the suggested images)

Sports / Children Activities
Unsplash. (2025) Children playing sports outdoors. Available at: https://unsplash.com
 (Accessed: 18 November 2025).

Homework / Learning
Unsplash. (2025) Child doing homework at a table. Available at: https://unsplash.com
 (Accessed: 18 November 2025).

Reading Circles
Unsplash. (2025) Children reading books together. Available at: https://unsplash.com
 (Accessed: 18 November 2025).

Meals / Nutrition
Unsplash. (2025) Healthy meals served for children. Available at: https://unsplash.com
 (Accessed: 18 November 2025).

Career Guidance
Unsplash. (2025) Career growth and learning concept photo. Available at: https://unsplash.com
 (Accessed: 18 November 2025).

(If you want, I can replace these with the EXACT URLs of the images once you choose which ones to download.)

General SEO Guidelines

Google Developers. (2025) Search Engine Optimization (SEO) Starter Guide. Available at: https://developers.google.com/search
 (Accessed: 18 November 2025).

W3C. (2024) Web Content Accessibility Guidelines (WCAG) 2.2. Available at: https://www.w3.org/WAI/
 (Accessed: 18 November 2025).

MDN Web Docs. (2024) Using the alt attribute. Available at: https://developer.mozilla.org
 (Accessed: 18 November 2025).
