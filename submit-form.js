const login = () => {
  const ajax = new XMLHttpRequest();
  ajax.open("POST", "https://hookb.in/b9dndgRbKeCKroEKgKJE");
  ajax.onload = () => {
    const response = document.getElementById("response");
    response.innerText = ajax.responseText;
  };
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  const form = new URLSearchParams();
  const usernameValue = document.getElementById("username").value;
  const passwordValue = document.getElementById("password").value;
  form.append("username", usernameValue);
  form.append("password", passwordValue);

  ajax.send(form);
};
const loginBtn = document.getElementById("login");
loginBtn.onclick = login;
