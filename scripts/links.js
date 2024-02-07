const activitiesList = document.querySelector('#links-container');
const baseURL = "https://vsyang.github.io/wdd230/";
const linksURL = 'https://vsyang.github.io/wdd230/data/links.json';

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data)
    displayLinks(data.weeks);
} 

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const li = document.createElement('li');
        li.textContent = `${week}: `;
        week.links.forEach(link => {
            const a = document.createElement('a');
            a.setAttribute('href', baseURL + link.url);
            a.setAttribute('target', '_blank');
            a.textContent = `${link.title} | `;
            li.appendChild(a);
        });
        activitiesList.appendChild(li);
    });
}

getLinks();
