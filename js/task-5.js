function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

const handleClick = (event) => {
  const colorBody = (document.body.style.backgroundColor = getRandomHexColor());
  spanColor.textContent = colorBody;
};

button.addEventListener("click", handleClick);
