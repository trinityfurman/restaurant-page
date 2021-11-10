// Create page layout

const loadPage = () => {
    const container = document.querySelector('#content');
    const header = document.createElement('div');
    header.textContent = "Dandelion's Tea Shop";
    header.classList.add('heading');

    const image = document.createElement('img');
    image.src = "../src/images/main.jpg";
    
    const body = document.createElement('div');
    body.innerHTML = "Seasonal blends, bewitching herbs, locally-sourced ingredients—we have a tea for every mood." + "<br>" + "Join us in the heart of Novigrad for a cup of nature and respite." + "<br>" + "Bring a book and a friend.";

    container.appendChild(header);
    container.appendChild(image);
    container.appendChild(body);

};

export { loadPage };