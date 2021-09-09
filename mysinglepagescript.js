var query = window.location.search.substring(1);
var vars = query.split("=");
var ID = vars[1];
console.log(ID);

const url = "https://dynamic-8970.restdb.io/rest/festival/" + ID;
console.log(url);

const options = {
  headers: {
    "x-apikey": "61387a7043cedb6d1f97ee33",
  },
};

//fetch the data
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    showProduct(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showProduct(product) {
  console.log(product);
  document.querySelector(".template_single_band .title h3").textContent =
    product.bandName;
  document.querySelector(".paragraph p").textContent = product.Description;
  document.querySelector(".template_single_band .title h4").textContent =
    product.Genre;
  document.querySelector(".image_description img").src = product.img_url;
  document.querySelector(".videoWrapper iframe").src = product.video_url;
}

const url2 = "https://dynamic-8970.restdb.io/rest/festival?max=6";

//fetch de data
fetch(url2, options)
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

function handleData(bands) {
  bands.forEach((band) => {
    console.log(band);

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h2").textContent = band.bandName;
    clone.querySelector("img").src = band.img_url;
    clone.querySelector(
      ".img_for_all a"
    ).href = `singleband.html?id=${band._id}`;
    const mainEl = document.querySelector("main");
    mainEl.appendChild(clone);
  });
}
