const circle = document.querySelector('.header .entire-bar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .entire-bar .navlist ul');
const header = document.querySelector('.header.container');
circle.addEventListener('click', () => {
    circle.classList.toggle('active');
    mobile_menu.classList.toggle('active');

})
