function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

changeColor.addEventListener("click", handle);

function handle(event) {
  const colorId = getRandomHexColor();
  body.style.backgroundColor = colorId;
  color.textContent = colorId;
}
// color =  #385a71
