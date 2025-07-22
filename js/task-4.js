const form = document.querySelector(".login-form");
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

form.addEventListener("submit", handle);

function handle(event) {
  event.preventDefault();
  const obj = {
    email: null,
    password: null,
  };
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  obj.email = email.trim();
  obj.password = password.trim();
  console.log(obj);
  form.reset();
}
