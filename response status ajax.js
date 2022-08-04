//open with liveserver, localhost:XXXX/index.html

const ajax = new XMLHttpRequest();
ajax.open("GET", "api/2022.json");

function responseStatus(json) {
  for (let i in json) {
    const newElement = document.createElement("p");
    newElement.textContent = json[i].holiday_name;
    document.body.appendChild(newElement);

    // console.log(json[i].holiday_name);
  }
}

ajax.addEventListener("load", function () {
  if (ajax.status === 200) {
    const json = JSON.parse(ajax.responseText);
    responseStatus(json);
  } else {
    responseStatus([
      {
        holiday_name: `error ${ajax.status} forbidden`,
        // get object or array
      },
    ]);
  }
});

ajax.send();
