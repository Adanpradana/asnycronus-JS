const login = () => {
  const ajax = new XMLHttpRequest();
  ajax.open("POST", "https://webhook.site/97217e23-31aa-4236-8177-2c01c41f893e");
  ajax.onload = () => {
    const response = document.getElementById("response");
    response.innerText = ajax.responseText;
  };
  //   ajax.setRequestHeader("Content-Type", "multipart/form-data");

  const formm = new FormData();
  const username = document.getElementById("username").value;
  const name = document.getElementById("name").value;
  const files = document.getElementById("profile").files;
  const firstFile = files.item(0);

  formm.append("username", username);
  formm.append("name", name);
  formm.append("profile", firstFile);

  ajax.send(formm);
};

const register = document.getElementById("register");
register.onclick = login;
