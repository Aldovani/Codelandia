const ReportsFixed = [
  {
    title: "Agora é oficial:O Windows 11 está vindo",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
  vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel
  diam fringilla, eu ullamcorper ex iaculis.`,
    publishedAt: "02 de Jul,2021 ",
  },
  {
    title: "Tim Berners-Lee vai leiloar código-fonte da web",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
  vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel
  diam fringilla, eu ullamcorper ex iaculis.`,
    publishedAt: "02 de Jul,2021 ",
  },
  {
    title: "Tem Firefox novo no pedaço e você vai querer migrar",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
  vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel
  diam fringilla, eu ullamcorper ex iaculis.`,
    publishedAt: "02 de Jul,2021 ",
  },
  {
    title: "John McAfee, criador do antivírus McAfee, morre",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
  vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel
  diam fringilla, eu ullamcorper ex iaculis.`,
    publishedAt: "02 de Jul,2021 ",
  },
];
let asides;

const sr = ScrollReveal({
  origin: "left",
  distance: "0px",
  duration: 800,
  reset: false,
});

ReportsFixed.forEach((e) => {
  CreateReport(e);
});
ScrollReveal().reveal(".aside", sr);

asides = document.querySelectorAll(".aside");

const NodeButtons = document.querySelectorAll("button");
NodeButtons.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.classList.value.includes('fa-heart-o')) {
      e.target.classList.remove('fa-heart-o')
      e.target.classList.add('fa-heart')
    }
    else {
      e.target.classList.remove('fa-heart')
      e.target.classList.add('fa-heart-o')
    }
   
   
  });
});

// }

const input = document.querySelector("input");
input.addEventListener("keyup", (e) => {

  asides.forEach((e) => {
  
    if (
      e
        .querySelector("h1")
        .textContent.toLocaleLowerCase()
        .includes(input.value.toLocaleLowerCase().trim())
    ) {
      e.style = "";
    } else {
      e.style = "display:none";
    }
  });
});

function CreateReport({ title, description, publishedAt }) {
  const aside = `
  <aside class="aside">
  <div class="date-like">
    <span>${publishedAt}</span>
    <button>
      <i class="fa fa-heart-o coracao" ></i>
    </button>
  </div>


  <h1 class="title">${title}</h1>
  <p class="content">
    ${description}
  </p>
</aside>
  `;

  document.querySelector("body").innerHTML += aside;
}
