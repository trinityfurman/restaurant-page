const loadMenu = () => {

    const container = document.querySelector(".mainBody");
    const heading = document.createElement('div');
    heading.textContent = 'Current Teas';
    heading.id = "teaHeading";

    const headingBody = document.createElement('div');
    headingBody.textContent = "Each cup of tea costs 5 crowns.";

    const first = document.createElement('div');
    const firstHeading = document.createElement('div');
    firstHeading.classList.add('teaHeaders');
    firstHeading.textContent = "Lilac & Gooseberry";
    const firstBody = document.createElement('div');
    firstBody.textContent = "A sweet-smelling blend that evokes memories of years past.";

    first.appendChild(firstHeading);
    first.appendChild(firstBody);


    
    const second = document.createElement('div');
    const secondHeading = document.createElement('div');
    secondHeading.textContent = "Thunderbolt";
    secondHeading.classList.add('teaHeaders');
    const secondBody = document.createElement('div');
    secondBody.textContent = "A highly-caffeinated green tea to improve focus.";

    second.appendChild(secondHeading);
    second.appendChild(secondBody);


    const third = document.createElement('div');
    const thirdHeading = document.createElement('div');
    thirdHeading.textContent = "Herbs of the Woods";
    thirdHeading.classList.add('teaHeaders');
    const thirdBody = document.createElement('div');
    thirdBody.textContent = "A magical tea made from a trio of woodland herbs: mugwort, sage, and mint.";

    third.appendChild(thirdHeading);
    third.appendChild(thirdBody);

    const fourth = document.createElement('div');
    const fourthHeading = document.createElement('div');
    fourthHeading.textContent = "Cat Eyes";
    fourthHeading.classList.add('teaHeaders');
    const fourthBody = document.createElement('div');
    fourthBody.textContent = "A strong black tea infused with clementine and gold powder.";

    fourth.appendChild(fourthHeading);
    fourth.appendChild(fourthBody);


    container.appendChild(heading);
    container.appendChild(headingBody);
    container.appendChild(first);
    container.appendChild(second);
    container.appendChild(third);
    container.appendChild(fourth);

};

export { loadMenu };