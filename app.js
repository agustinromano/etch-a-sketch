const grid = document.querySelector(".grid");

function selectButton() {}

function squareSize() {
  const small = 16 * 16;
  const medium = 32 * 32;
  const large = 64 * 64;
}

function addSquare() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("square");
  newDiv.appendChild(grid);
}

function startPainting() {}
