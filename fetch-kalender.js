const request = "api/2022.json";
const content = document.getElementById("content");

fetch(request)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
