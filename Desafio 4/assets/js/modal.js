export const $modal = document.querySelector('[data-js="modal"]');
const $button = document.querySelector('[data-js="modal-button"]');

$modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    $modal.classList.remove("hide");
  }

});
window.addEventListener("keyup", (e) => {
  if ($modal.classList.value =="modal hide") {
    if (e.code == "Escape") {
      $modal.classList.remove("hide");
    }
  }
});

$button.addEventListener("click", () => {
  $modal.classList.remove("hide");
});
