const login = () => {
  const ajax = new XMLHttpRequest();
  ajax.open("POST", "https://hookb.in/b9dndgRbKeCKroEKgKJE");
  ajax.onload = () => {
    const response = document.getElementById("response");
    response.innerText = ajax.responseText;
  };

  ajax.setRequestHeader("content-type", "application/json");
  const json = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  ajax.send(JSON.stringify(json));
};
const loginBtn = document.getElementById("login");
loginBtn.onclick = login;
