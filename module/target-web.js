let expandMore = document.querySelectorAll('.faq')
let changeIconExpnd = document.querySelectorAll('.expnd')

expandMore.forEach(section => {
    section.addEventListener('click', (el) =>{
        section.classList.toggle('visible')
    })
});

let menu = document.getElementById('menu')
let mobileMenu = document.querySelector('.mobile')
menu.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu-mobile')
})
menu.addEventListener('click', () => {
    menu.innerText = (menu.innerText === 'menu') ? 'close' : 'menu';
})
