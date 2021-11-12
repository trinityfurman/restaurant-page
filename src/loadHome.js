const loadHome = () => {
       // Create body & contents
       const body = document.querySelector(".mainBody");
   
       const header = document.createElement('div');
       header.textContent = "Dandelion's Tea Room";
       header.classList.add('heading');
   
       const text = document.createElement('div');
       text.innerHTML = "Seasonal blends, bewitching herbs, locally-sourced ingredients—we have a tea for every mood." + "<br>" + "Join us in the heart of Novigrad for a cup of warmth and solace.";
   
       body.appendChild(header);
       body.appendChild(text);
};

export { loadHome };