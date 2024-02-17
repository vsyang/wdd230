const banner = document.querySelector('.banner');
let weekday = new Date().getDay();

if (weekday == 1 || weekday == 2 || weekday == 3) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

const closeBanner = document.querySelector('.close-banner');

closeBanner.addEventListener('click', function() {
    banner.style.display = "none";
});