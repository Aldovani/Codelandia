import {projects} from "./projects.js";

const gridElement = document.querySelector(".grid");

projects.forEach((project) => {
  const card = /*HTML*/ `
  <div class="card">
  <div class="card--image">
    <img src="${project.image}" alt="${project.title}">
  </div>
  <div class="card--content">
    <h1 class="card--title">${project.title}</h1>
    <p class="card--description">${project.description}</p>
    <div class="card--container-button">
      <a ${
        project.url !== "" ? `href="${project.url}"` : "disabled"
      } target="_blank" class="card--link">Demo</a>
      <a href="${
        project.repository
      }" class="card--link card--link-border">Github</a>
    </div>
  </div>
</div>
  `;

  gridElement.innerHTML += card;
});
