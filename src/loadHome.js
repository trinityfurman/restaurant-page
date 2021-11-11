const loadHome = () => {
       // Create body & contents
       const body = document.querySelector(".body");
   
       const header = document.createElement('div');
       header.textContent = "Dandelion's Tea Shop";
       header.classList.add('heading');
   
       const image = document.createElement('img');
       image.src = "../src/images/main.jpg";
       
       const text = document.createElement('div');
       text.innerHTML = "Seasonal blends, bewitching herbs, locally-sourced ingredients—we have a tea for every mood." + "<br>" + "Join us in the heart of Novigrad for a cup of nature and respite." + "<br>" + "Bring a book and a friend.";
   
       body.appendChild(header);
       body.appendChild(image);
       body.appendChild(text);
};

export { loadHome };