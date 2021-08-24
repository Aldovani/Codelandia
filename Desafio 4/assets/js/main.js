import { $modal } from "./modal.js";

const $form = document.querySelector('[data-js="form"]');
const $loading = document.querySelector('[data-js="loading"]');
const $buttonPassword = document.querySelector('[data-js="password-button"]');

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.elements["email"];
  const password = e.target.elements["password"];

  if (!email.value || !password.value) return;

  $loading.classList.add("hide");
  setTimeout(() => {
    $loading.classList.remove("hide");
    $modal.classList.add("hide");
  }, 4000);
});

$buttonPassword.addEventListener("click", (e) => {
  const value =
    e.currentTarget.previousElementSibling.type === "password"
      ? "text"
      : "password";
  e.currentTarget.previousElementSibling.type = value;
});
