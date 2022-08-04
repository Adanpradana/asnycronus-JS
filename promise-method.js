function getProduct() {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "api/2022.json");
    ajax.onload = () => {
      ajax.status === 200 ? resolve(ajax.responseText) : reject(`forbidden ${ajax.responseText}`);
    };
    ajax.send();
  });
}

getProduct()
  .then((response) => {
    return JSON.parse(response);
  })
  .then((json) => {
    document.getElementById("holiday-name").textContent = json[2].holiday_name;
    document.getElementById("holiday-date").textContent = json[2].holiday_date;
  });
