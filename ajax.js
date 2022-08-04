//open with liveserver, localhost:XXXX/index.html

const ajax = new XMLHttpRequest();
ajax.open("GET", "api/2022.json");

ajax.addEventListener("load", function () {
  const json = JSON.parse(ajax.responseText);

  for (const i in json) {
    const newElement = document.createElement("p");
    newElement.textContent = json[i].holiday_name;
    document.body.appendChild(newElement);

    console.log(json[i].holiday_name);
  }
});

ajax.send();
