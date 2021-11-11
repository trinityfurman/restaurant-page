const loadMenu = () => {

    const container = document.querySelector(".body");
    const heading = document.createElement('div');
    heading.textContent = 'Teas';

    const headingBody = document.createElement('div');
    headingBody.textContent = "Each cup of tea costs 5 crowns.";

    const first = document.createElement('div');
    const firstHeading = document.createElement('div');
    firstHeading.textContent = "Lilac & Gooseberry";
    const firstBody = document.createElement('div');
    firstBody.textContent = "A sweet-smelling blend that invokes a memory of years past.";

    first.appendChild(firstHeading);
    first.appendChild(firstBody);


    
    const second = document.createElement('div');
    const secondHeading = document.createElement('div');
    secondHeading.textContent = "Thunderbolt";
    const secondBody = document.createElement('div');


    const third = document.createElement('div');

    const fourth = document.createElement('div');

    const fifth = document.createElement('div');

    container.appendChild(heading);
    container.appendChild(headingBody);
    container.appendChild(first);
};

export { loadMenu };