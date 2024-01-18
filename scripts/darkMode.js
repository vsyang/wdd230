const myBtn = document.querySelector('#darkBtn');
const mainDark = document.querySelector('main');

myBtn.addEventListener('click', () => {
    mainDark.classList.toggle('dark');
});