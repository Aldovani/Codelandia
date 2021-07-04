const darkMode=document.querySelector('.darkMode')
darkMode.addEventListener('click', () => {

  
  if (!document.body.classList.value.includes('dark')) {
    document.body.classList.add('dark')
    darkMode.classList.remove('fa-sun-o')
    darkMode.classList.add('fa-moon-o')
    
  }
  else {
    document.body.classList.remove('dark')
    darkMode.classList.remove('fa-moon-o')
    darkMode.classList.add('fa-sun-o')
    
  }



})
