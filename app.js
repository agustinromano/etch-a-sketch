let color = "black";

function createBox(size) {
  let board = document.querySelector(".draw-board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

createBox(16);

function selectSize(input) {
  if (input >= 2 && input <= 100) {
    createBox(input);
  } else {
    window.alert("Slow down there bud only numbers 2 - 100.");
  }
}

function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360} , 100% , 50%`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(selection) {
  color = selection;
}

function resetBoard() {
  window.location.reload();
}
