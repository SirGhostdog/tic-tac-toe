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

  winCheck = () => {
    if (grid[0].every(val => val == 'X')){
      console.log('X wins')
    } else if(grid[0].every(val => val == 'O')){
      console.log('O wins')
    } else if(grid[1].every(val => val == 'X')){
      console.log('X wins')
    } else if(grid[1].every(val => val == 'O')){
      console.log('O wins')
    } else if(grid[2].every(val => val == 'X')){
      console.log('X wins')
    } else if(grid[2].every(val => val == 'O')){
      console.log('O wins')
    } else if(grid[0][0].includes('X') && grid[1][0].includes('X') && grid[2][0].includes('X')){
      console.log('X wins')
    } else if(grid[0][0].includes('O') && grid[1][0].includes('O') && grid[2][0].includes('O')){
      console.log('O wins')
    } else if(grid[0][1].includes('X') && grid[1][1].includes('X') && grid[2][1].includes('X')){
      console.log('X wins') 
    } else if(grid[0][1].includes('O') && grid[1][1].includes('O') && grid[2][1].includes('O')){
      console.log('O wins')
    } else if(grid[0][2].includes('X') && grid[1][2].includes('X') && grid[2][2].includes('X')){
      console.log('X wins') 
    } else if(grid[0][2].includes('O') && grid[1][2].includes('O') && grid[2][2].includes('O')){
      console.log('O wins')
    } else if(grid[0][0].includes('X') && grid[1][1].includes('X') && grid[2][2].includes('X')){
      console.log('X wins') 
    } else if(grid[0][0].includes('O') && grid[1][1].includes('O') && grid[2][2].includes('O')){
      console.log('O wins')
    } else if(grid[0][2].includes('X') && grid[1][1].includes('X') && grid[2][0].includes('X')){
      console.log('X wins') 
    } else if(grid[0][2].includes('O') && grid[1][1].includes('O') && grid[2][0].includes('O')){
      console.log('O wins')
    } 
  }

  const playRound = (a, b) => {
    placeMark(a, b, getActivePlayer())
    winCheck();
    switchPlayer();
    printNewRound();
  }

  return {
    playRound,
    getActivePlayer,
    playerOne,
    playerTwo,
  }
}

function screenController() {

  const game = gameController();

  const firstPlayer = game.playerOne
  const secondPlayer = game.playerTwo

  const button = document.getElementById("submitButton")
  button.addEventListener('click', function(){

    const playerOneName = document.getElementById("textbox-1")
    const playerOneMark = document.getElementById("dropdown-1")
    const playerTwoName = document.getElementById("textbox-2")
    const playerTwoMark= document.getElementById("dropdown-2")

    firstPlayer.name = playerOneName.value
    firstPlayer.mark = playerOneMark.value
    secondPlayer.name = playerTwoName.value
    secondPlayer.mark = playerTwoMark.value

    playerOneName.remove()
    playerOneMark.remove()
    playerTwoName.remove()
    playerTwoMark.remove()
    button.remove()

    const playerOneTitle = document.getElementById("one")
    const playerTwoTitle = document.getElementById("two")

    playerOneTitle.textContent +=  `${firstPlayer.name} "${firstPlayer.mark}"`
    playerTwoTitle.textContent +=  `${secondPlayer.name} "${secondPlayer.mark}"`

  })

  const gameTile = document.getElementsByClassName("boardSquare")

  //Nested for-loop that iterates through each column of each
  //row and then appends a data attribute to each div on the HTML

  let counter = 0   
    for( let row = 0; row < 3; row++ ){
      for( let column = 0; column < 3; column++ ){
        gameTile[counter].setAttribute("data-row", row)
        gameTile[counter].setAttribute("data-column", column)
        counter++
      }
    }
  
  
  for (const tile of gameTile) {
    tile.addEventListener("click", function() {

      let playerUp = game.getActivePlayer().mark
      const htmlRow = tile.getAttribute('data-row')
      const htmlColumn = tile.getAttribute('data-column')

      if(tile.textContent != ""){
        alert("Try another square")
      } else {
        tile.textContent += playerUp,
        game.playRound(htmlRow,htmlColumn)
        } 
    })
  }
}

let screen = screenController();
