const directoryList = document.querySelector('.member-directory');
const website = document.querySelector('#website');
const imgBase = 'https://vsyang.github.io/wdd230/chamber/images/';
const membersURL = 'https://vsyang.github.io/wdd230/chamber/data/members.json';

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data);
}
