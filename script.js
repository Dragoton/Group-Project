const url = "https://dynamic-8970.restdb.io/rest/festival?max=6";

//API-key:
const options = {
  headers: {
    "x-apikey": "61387a7043cedb6d1f97ee33",
  },
};

fetch(url, options).then((response) => {
  if (response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
});
then((data) => {
  //we have the data
  console.log(data);
  //handle data
}).catch((e) => {
  //
  console.error("anerror occured:", e.massage);
});
