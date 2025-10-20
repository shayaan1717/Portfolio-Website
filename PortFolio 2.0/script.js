const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// !after mixer

const mixer = mixitup(".project__grid");

// !after scroll reveal (using scroll reveal for smooth animation effect)

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});
//content
ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// ? about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

// // education
// ScrollReveal().reveal(".education__card" , {
//     duration: 1000,
//     interval: 500,
// });

// ! SWIPER
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// EDUCATION SLIDER PART

ScrollReveal().reveal(".swiper-wrapper", {
  ...scrollRevealOption,
  origin: "top",
});

// PROJECTS SLIDER
ScrollReveal().reveal(".project__card img", {
  ...scrollRevealOption,
  origin: "right",
});

// FORM DATA GENERATION
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzIv2oMRkbb2rxB7do2S5QYenpqIji5FgwQBQ8pbeji_AuQBrO2jgmw0t3A3w4fYgWJ/exec"; // paste copied URL here
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Form submitted successfully!");
      form.reset();
    })
    .catch((error) => alert("Error! " + error.message));
});
