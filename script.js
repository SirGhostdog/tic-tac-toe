const markX = "X"
const markO = "O"

const grid = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"]
]

function displayGrid (board) {
  let output = "";
  for ( i = 0; i < board.length; i++){
    output += board[i].join(" ") + "\n";
  }
  console.log(output);
}

function gameController() {

  let playerOne = {
    name: "One",
    mark: markX,
  }

  let playerTwo = {
    name: "Two",
    mark: markO,
  }

  
}

gameController();
