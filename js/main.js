const hamMenu = document.querySelector('.ham-menu');

const menuFull = document.querySelector('.menu-full');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    menuFull.classList.toggle('active');
})