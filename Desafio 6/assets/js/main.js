const botao = document.querySelector('[data-js="trailer"]')
const modal = document.querySelector('[data-js="modal"]')
const video = document.querySelector('video')

botao.addEventListener('click', () => {
  modal.classList.add('hide')
})
modal.addEventListener('click', (e) => {


  if (e.target.classList.value=="modal hide") {
    modal.classList.remove('hide')
    video.pause()
    video.currentTime=0
    
  }
})

window.addEventListener('keyup', (e) => {
  if (e.code=="Escape" && modal.classList.contains('hide')) {
    modal.classList.remove('hide')
    video.pause()
    video.currentTime=0
  
  }
})