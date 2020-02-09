// 1. create two variables represent restart bottom and // TODO:
var restart = document.querySelector("#b");
var table = document.querySelectorAll("td");

// 2. create restart action and set
function clearBoard() {
  for (var i = 0; i < table.length; i++) {
    table[i].textContent = "";
  }
}

restart.addEventListener("click", clearBoard);

// 3. create td action and set
function gameDisplayLogic() {
  if (this.textContent === '') {
    this.textContent = 'X';
  } else if (this.textContent === 'X') {
    this.textContent = 'O';
  } else {
    this.textContent = '';
  }
}

for (var i = 0; i < table.length; i++) {
  table[i].addEventListener('click', gameDisplayLogic);
}
