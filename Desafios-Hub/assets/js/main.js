import * as data from "./projects.json " assert { type: "json" };

const projects = data.default;

const gridElement = document.querySelector(".grid");

projects.forEach((project) => {
  const card = `
  <div class="card">
  <div class="card--image">
    <img src="${project.image}" alt="${project.title}">
  </div>
  <div class="card--content">
    <h1 class="card--title">${project.title}</h1>
    <p class="card--description">
    ${project.description ?? ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    felis ligula, accumsan nec cursus in, eleifend sit amet dui.`}
   
    </p>
    <div class="card--container-button">
      <a ${project.url!==""?`href="${project.url}"`:"disabled"} target="_blank" class="card--link">Demo</a>
      <a href="${project.repository}" class="card--link card--link-border">Github</a>
    </div>
  </div>
</div>
  `;

  gridElement.innerHTML += card;
});



