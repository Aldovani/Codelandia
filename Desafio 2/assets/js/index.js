const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000,
  reset: true,
});

ScrollReveal().reveal("li", sr);

function typeWrite(elemento) {
  const textoArray = elemento.textContent.split("");
  elemento.textContent = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.textContent += letra;
    }, 75 * i);
  });
}

typeWrite(document.querySelector('.text'))