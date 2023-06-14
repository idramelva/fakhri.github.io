// ====================== toggle=======================//
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ====================== scroll section active link ================//
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ================== sticky navbar====================//
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // ====================== remove toggle=======================//
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ================== scroll revel====================//
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portofolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// ================== typed js====================//
const typed = new Typed(".multiple-text", {
  strings: ["Expert Generalist", " Forex Trader", "Fullstack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

alert("hello bapak adam");
// alert("welcome fakhri");
// alert("welcome 1");
// alert("welcome 2");
// var name = prompt("input name");
// alert("welcome " + name);
// var i = confirm("u sure ?");
// if (i == true) {
//   alert("ok");
// } else {
//   alert("cancel");
// }
