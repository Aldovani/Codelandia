window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    document.querySelector(".header").classList.add("show");
  } else {
    document.querySelector(".header").classList.remove("show");
  }
});

document.querySelector(".container-menu").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("show");
});
  

document.querySelectorAll(".menu li a ").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".menu").classList.remove("show");
  });
});
