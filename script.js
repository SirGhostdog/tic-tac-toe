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
    if(player == playerOne) {
      return grid[a][b] = playerOne.mark
    } else{
      return grid[a][b] = playerTwo.mark
    }
  }

  
  // grid.forEach(element =>{
  //   if (element == 'X' || 'O'){
  //     console.log ("try another sqaure")
  //     displayGrid(grid)
  //   } else {
  //     placeMark(1,1,playerOne)
  //     displayGrid (grid)
  //   }
  // })
  
}

gameController();
