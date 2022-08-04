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
getProduct();
console.log(getProduct());
