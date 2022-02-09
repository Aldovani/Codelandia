document.addEventListener("DOMContentLoaded", () => {
  const tl = new TimelineMax();
  tl.fromTo(
    ".preloader",
    1,
    { width: "100%" },
    { width: "0%", delay: 5, ease: Expo.easeInOut }
  )
    .fromTo(
      ".main img",
      1,
      { opacity: 0 },
      { opacity: 1, delay: 1, ease: Expo.easeInOut }
    )
    .fromTo(
      ".main .button",
      1,
      { opacity: 0 },
      { opacity: 1, delay: 1.5, ease: Expo.easeInOut }
    );
});

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  document.querySelector(".header").classList.toggle("show");
});
