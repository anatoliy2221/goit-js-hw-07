function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", getAmountInput);
function getAmountInput() {
  boxesContainer.innerHTML = "";
  const amount = input.value;
  if (amount > 0 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${30 + 10 * i}px`;
      box.style.height = `${30 + 10 * i}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      input.value = "";
    }
  }
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
