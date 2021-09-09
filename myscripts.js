const url = "https://dynamic-8970.restdb.io/rest/festival?max=6";

const options = {
  headers: {
    "x-apikey": "61387a7043cedb6d1f97ee33",
  },
};

//fetch de data
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

//clone the template that we have for the 6 bands

function handleData(bands) {
  //here I grab each on of the elements from the array
  bands.forEach((band) => {
    //here I console log it to make sure everything is okay
    console.log(band);
    //here I take the template that I already have
    const template = document.querySelector("template").content;
    //here I clone it
    const clone = template.cloneNode(true);
    //here I add all the data from database to the existing tags from the template
    clone.querySelector("h2").textContent = band.bandName;
    clone.querySelector("img").src = band.img_url;
    //here I add the id of the band to have it on the http so it can be selected as a single element 
    clone.querySelector(".templates a").href = `singleband.html?id=${band._id}`;
    //here I place all my clones in the main
    const mainEl = document.querySelector("main");
    //here I show the clones on main
    mainEl.appendChild(clone);
  });
}
