let nav = document.querySelector('header')

window.addEventListener('scroll', () =>{
    nav.classList.toggle('sticky', window.scrollY > 0)
})
//el.target.parentElement.parentElement.querySelector(".answers").classList.toggle("visible");