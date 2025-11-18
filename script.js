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

  let playerOneName ="One"

  let playerOne = {

    name: playerOneName,
    mark: markX,

  };

  let playerTwoName = "Two"

  let playerTwo = {

    name: playerTwoName,
    mark: markO,

  };

  const placeMark = (a, b, player) => {
    if(player == playerOne && grid[a][b] == '-') {
      return grid[a][b] = playerOne.mark
    } else if (player == playerTwo && grid[a][b] == '-'){
      return grid[a][b] = playerTwo.mark
    } else {
      console.log("try another square")
    }
  };

  let activePlayer = playerOne

  const switchPlayer = () => {
    activePlayer = (activePlayer === playerOne) ? playerTwo : playerOne
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    displayGrid(grid);
    console.log(`${getActivePlayer().name}'s turn.`)
  }

  const playRound = (a, b) => {
    placeMark(a, b, getActivePlayer())
    switchPlayer();
    printNewRound();
  }

  printNewRound();

  return {
    playRound,
    getActivePlayer,
  }
}

let game = gameController();
game.playRound(1,2);
game.playRound(1,1);
