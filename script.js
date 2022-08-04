const heading = document.getElementById("heading");

let numbers = 10;
const timer = setInterval(() => {
  numbers--;
  heading.textContent = `redirecting in ${numbers} second`;
  if (numbers <= 0) clearInterval(timer);
}, 1000);
