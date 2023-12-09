const listItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`);

for (const element of listItems) {
  console.log(`Category: ${element.firstElementChild.textContent} `);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
}
