// Create initial page layout

const loadPage = () => {
    const container = document.querySelector('#content');
    
    // Create navigation bar (make separate module for this?)
    const nav = document.createElement('div');
    nav.classList.add('navigation');

    const linkOne = document.createElement('a');
    linkOne.id = "homeLink";
    linkOne.textContent = "Home";
    linkOne.href = "#home";

    const linkTwo = document.createElement('a');
    linkTwo.id = "menuLink";
    linkTwo.textContent = "Menu";
    linkTwo.href = '#menu';

    const linkThree = document.createElement('a');
    linkThree.id = "contactLink";
    linkThree.textContent = "Contact";
    linkThree.href = '#contact';

    nav.appendChild(linkOne);
    nav.appendChild(linkTwo);
    nav.appendChild(linkThree);

    // Create body & contents
    const body = document.createElement('div');
    body.classList.add('body');

    
    container.appendChild(nav);
    container.appendChild(body);
};

export { loadPage };