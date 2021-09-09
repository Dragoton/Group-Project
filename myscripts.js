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

function handleData(bands) {
  bands.forEach((band) => {
    console.log(band);

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h2").textContent = band.bandName;
    clone.querySelector("img").src = band.img_url;
    clone.querySelector(".templates a").href = `singleband.html?id=${band._id}`;
    const mainEl = document.querySelector("main");
    mainEl.appendChild(clone);
  });
}

// // url.forEach(showContent);
// // function showContent(product) {}

// // console.table(url);

// // url.forEach(showProduct);

// function showProduct(elements) {
//   const myTemplate = document.querySelector("template").content;
//   console.log(myTemplate);
//   const myCopy = myTemplate.cloneNode(true);
//   console.log(myCopy);
//   myCopy.querySelector("h2").textContent = elements.bandName;
//   myCopy.querySelector("img").src = elements.Picture;
//   const mainEl = document.querySelector("main");
//   mainEl.appendChild(myCopy);
//   //   document.querySelector("main").appendChild(myCopy);
// }

// // window.addEventListener("load", showContent);

// // function showContent() {
// //     var temp= document.getElementsByTagName("template");
// //     var clon = temp.content.cloneNode(true);
// //     document.main.appendChild(clon);
// // }

// // console.table(bands);

// // bands.forEach(showProduct);

// // function showProduct(band) {
// //   const template = document.querySelector("template").content;
// //   const clone = template.cloneNode(true);
// //   clone.querySelector("h2").textContent = "Band Name";
// //   clone.querySelector("img").src ="img src="mainposter.jpg"" ;

// //   const parent = document.querySelector("main");
// //   parent.appendChild(clone);
// //
