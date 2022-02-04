import * as data from "./projects.json " assert { type: "json" };

const projects = data.default;

const gridElement = document.querySelector(".grid");

projects.forEach((project, index) => {
  const card = `
  <div class="project">
          <img src="${project.image}" alt="${project.title}" />
        
          <div class="description">
            <h3>${project.title}</h3>
            <p class="tecnologias">${project.tags.join(
              "<span> + </span>"
            )} </p>
            <div>
              <a
               href="${project.url}"
               target="_blank"
               class="button ${!project.url ? "disabled" : ""}"
               >Site</a>
               
               <a
              target="_blank"
                href="${project.repository}"
                class="button"
                >Github</a>
            </div>
          </div>
        </div>
  `;

  gridElement.innerHTML += card;
});


  anime({
    targets: ".title",
    translateX: ["-100vw", "0%"],
    opacity: [0, 1],
    duration: 2000,
  });
  anime({
    targets: ".subtitle",
    translateX: ["100vw", "0%"],
    opacity: [0, 1],

    duration: 2000,
  });
  anime({
    targets: [".icon-1", ".icon-4"],
    translateY: ["-100vh", "0"],
    duration: 1000,
    opacity: [0, 1],

    easing: "easeInOutQuad",
    rotate: "360deg",
  });
  anime({
    opacity: [0, 1],

    targets: [".icon-2", ".icon-5"],
    translateY: ["100vh", "0"],
    duration: 1000,
    easing: "easeInOutQuad",
    rotate: "360deg",
    opacity:[0,1],

  });
  anime({
    targets: [".icon-3"],

    opacity: [0, 1],
    translateX: ["-100vw", "0"],
    translateY: ["-100vh", "0"],
    duration: 1000,
    easing: "easeInOutQuad",
    rotate: "360deg",
  });
anime({
  opacity: [0, 1],
  targets: [".icon-6"],
    opacity:[0,1],
    translateX: ["-100vw", "0"],
    translateY: ["100vh", "0"],
    duration: 1000,
    easing: "easeInOutQuad",
    rotate: "360deg",
  });

anime({
  targets:".header",
  opacity: [0, 1],
  duration: 10000,

  })

document.querySelectorAll(".svg").forEach((svg) => {
  svg.addEventListener("click", () => {
    anime({
      targets: svg,
      duration: 1000,
      easing: "easeInOutQuad",
      rotate: ["0deg", "360deg"],
      direction: 'alternate',

    });
  });
});


const projectsElement = document.querySelectorAll(".project");

projectsElement.forEach((project, index) => {


  
  
  ScrollReveal().reveal(project, {
    delay: 50*index,
    duration: 1000,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    scale: 1,
    mobile: false,
    useDelay: 'always',
    viewFactor: 0.5,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  })
  
})