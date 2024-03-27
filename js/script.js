const menu = document.querySelector('.menu');
var burgerMenu = document.querySelector('.burger-menu');
burgerMenu.onclick = () => {
    menu.classList.toggle('active');
}

