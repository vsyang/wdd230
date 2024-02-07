const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#description');
const url = '//api.openweathermap.org/data/2.5/weather';
const apiKey = 'c8e24775a530c3c13e6c5c81a4f0e243';

async function apiFetch() {
    const latitude = 39.90;
    const longitude = -104.99;

    const apiUrl = `${url}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    weatherDescription.innerHTML = `-    ${data.weather[0].description}`;
    currentTemp.innerHTML = `${data.main.temp}°F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', weatherDescription);
}

apiFetch();