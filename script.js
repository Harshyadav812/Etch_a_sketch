const container = document.querySelector(".container");

let gridSize = 10;

for (let i = 1; i <= gridSize; i++) {
  const rowDiv = document.createElement('div')
  rowDiv.classList.add("row")
  container.appendChild(rowDiv)

  for (let j = 1; j <= gridSize; j++) {

    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square")
    rowDiv.appendChild(squareDiv);
  }
}