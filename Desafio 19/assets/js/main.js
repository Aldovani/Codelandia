const hamburger = document.querySelector('.hamburger');
const listLinks= document.querySelector('.links');
const links= document.querySelectorAll('.links a');
hamburger.addEventListener('click', () => { 
  listLinks.classList.toggle('open');
})


links.forEach(link => {
  link.addEventListener('click', () => {
    listLinks.classList.remove('open');
  })
})