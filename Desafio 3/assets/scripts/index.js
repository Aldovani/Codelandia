window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    document.querySelector(".header").classList.add("show");
  } else {
    document.querySelector(".header").classList.remove("show");
  }
});
