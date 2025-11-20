

function gameController() {
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
  
  const playerOne = {

    name: "",
    mark: "",

  };

  const playerTwo = {

    name: " ",
    mark: " ",

  };
  
  const button = document.getElementById("submitButton")
  button.addEventListener('click', function(){

    const playerOneName = document.getElementById("textbox-1")
    const playerOneMark = document.getElementById("dropdown-1")
    const playerTwoName = document.getElementById("textbox-2")
    const playerTwoMark= document.getElementById("dropdown-2")

    playerOne.name = playerOneName.value
    playerOne.mark = playerOneMark.value
    playerTwo.name = playerTwoName.value
    playerTwo.mark = playerTwoMark.value

    playerOneName.remove()
    playerOneMark.remove()
    playerTwoName.remove()
    playerTwoMark.remove()
    button.remove()

    const playerOneTitle = document.getElementById("one")
    const playerTwoTitle = document.getElementById("two")

    playerOneTitle.textContent +=  `${playerOne.name} "${playerOne.mark}"`
    playerTwoTitle.textContent +=  `${playerTwo.name} "${playerTwo.mark}"`
  })


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

//  const game = gameController();

//   const firstPlayer = game.playerOne.name
//   const secondPlayer = game.playerTwo

//   console.log(firstPlayer)


// function screenController() {

//   const game = gameController();

//   const firstPlayer = game.playerOne
//   const secondPlayer = game.playerTwo

//   console.log(firstPlayer)

  

// }

// let screen = screenController();
