const baseURL = "https://vsyang.github.io/wdd230/";
const linksURL = 'https://vsyang.github.io/wdd230/data/links.json';

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data)
    displayLinks(data.weeks);
} 

function displayLinks(weeks) {
    const linksContainer = document.getElementById("links-container");

    weeks.forEach((week) => {
        const weekNumber = document.createElement("li");
        const weekHeader = document.createElement("strong");
        weekHeader.innerHTML = week.week;
        weekNumber.appendChild(weekHeader);

        const linksList = document.createElement("ul");

        week.links.forEach((link) => {
            const linkItem = document.createElement("li");
            const linkTitle = document.createElement("a")
            linkTitle.href = link.url.startsWith("https") ? link.url : baseURL + link.url;
            linkTitle.textContent = link.title;
            linkItem.appendChild(linkTitle);
            linksList.appendChild(linkItem);
        });
        weekItem.appendChild(linksList);
        linksContainer.appendChild(weekNumber);
    }); 
}

getLinks();
