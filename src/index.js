import { loadPage } from  './loadPage';
import { loadMenu } from './loadMenu';
import { loadHome } from './loadHome';


loadPage();
loadHome();

const menuButton = document.querySelector("#menuLink");
const homeButton = document.querySelector("#homeLink");

const body = document.querySelector(".body");


menuButton.addEventListener('click', () => {
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    loadMenu();
});

homeButton.addEventListener('click', () => {
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    loadHome();
});



