const hamburgerButton = document.querySelector('#menuButton');
const navElement = document.querySelector('.navLinks');

hamburgerButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});