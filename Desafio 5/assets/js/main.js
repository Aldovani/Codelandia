const $modal = document.querySelector('[data-js="modal"]');
const $button = document.querySelector('[data-js="button-modal"]');
const $iframe = document.querySelector("iframe");

$button.addEventListener("click", () => {
  $modal.classList.add("hide");
  $iframe.src = "https://www.youtube.com/embed/SgZI655GgHk";
});

$modal.addEventListener("click", (e) => {
  if (e.currentTarget) {
    $modal.classList.remove("hide");
    $iframe.src = "";
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code == "Escape" && $modal.classList.contains("hide")) {
    $modal.classList.remove("hide");
  }
});
