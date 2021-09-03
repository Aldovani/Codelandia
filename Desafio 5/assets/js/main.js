const $audio = document.querySelector("[data-js='music']");
const $modal = document.querySelector('[data-js="modal"]');
const $button = document.querySelector('[data-js="button-modal"]');
const $video = document.querySelector("video");

$audio.volume=0.03

$button.addEventListener("click", () => {
  $modal.classList.add("hide");
  $audio.pause();
});

$modal.addEventListener("click", (e) => {
  if (e.target.classList.value == "modal hide") {
    $modal.classList.remove("hide");
    $video.pause();
    $video.currentTime=0
    $audio.play();
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code == "Escape" && $modal.classList.contains("hide")) {
    $modal.classList.remove("hide");
    $video.pause();
    $video.currentTime=0
    $audio.play();
  }
});
