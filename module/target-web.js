let expandMore = document.querySelectorAll('.faq')
let changeIconExpnd = document.querySelectorAll('.expnd')

expandMore.forEach(section => {
    section.addEventListener('click', (el) =>{
        section.classList.toggle('visible')
    })
});

