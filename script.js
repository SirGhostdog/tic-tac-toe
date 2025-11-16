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
  };

  function placeMark(a, b, player){
    if(player == playerOne && grid[a][b] == '-') {
      return grid[a][b] = playerOne.mark
    } else if (player == playerTwo && grid[a][b] == '-'){
      return grid[a][b] = playerTwo.mark
    } else {
      console.log("try another square")
    }
  }

  // placeMark(2, 2, playerTwo);
  // placeMark(1, 1, playerTwo);
  // placeMark(0, 0, playerTwo);
  // placeMark(0, 0, playerOne);
  displayGrid(grid);
}

gameController();
