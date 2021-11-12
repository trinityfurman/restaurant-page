const loadContact = () => {
    const container = document.querySelector(".mainBody");

    const location = document.createElement('div');
    location.textContent = "Come find us in Hierarch Square in downtown Novigrad.";
    location.id = "location";

    const hoursHeading = document.createElement('div');
    hoursHeading.textContent = "Hours";
    hoursHeading.id = "hoursHeading";
    const hours = document.createElement('div');
    hours.innerHTML = "Monday-Thursday: 11:00 - 4:00 pm <br> Friday-Sunday: 11:00 - 8:00 pm";
    hours.id = "hoursText";

    container.appendChild(location);
    container.appendChild(hoursHeading);
    container.appendChild(hours);

};

export { loadContact };