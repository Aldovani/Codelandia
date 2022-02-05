const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const header = document.querySelector(".header");
const links = document.querySelectorAll(".navigation a");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 100) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});
