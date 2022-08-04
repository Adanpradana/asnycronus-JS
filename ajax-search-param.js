const search = () => {
  const ajax = new XMLHttpRequest();
  const param = new URLSearchParams();

  const search = document.getElementById("search").value;

  param.append("search", search);

  ajax.open("GET", `https://hookb.in/b9dndgRbKeCKroEKgKJE?${param.toString()}`);

  ajax.onload = () => {
    console.log(ajax.responseText);
    const response = document.getElementById("response");
    response.innerText = ajax.responseText;
  };

  ajax.send();
};
const loginBtn = document.getElementById("searchBtn");
loginBtn.onclick = search;
