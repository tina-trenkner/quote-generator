document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}
board.cells = [
  {row: 0, col: 0, isMine: false, hidden: true},
  {row: 0, col: 1, isMine: true, hidden: true},
  {row: 0, col: 2, isMine: false, hidden: true},
  {row: 1, col: 0, isMine: true, hidden: true},
  {row: 1, col: 1, isMine: false, hidden: true},
  {row: 1, col: 2, isMine: true, hidden: true},
  {row: 2, col: 0, isMine: false, hidden: true},
  {row: 2, col: 1, isMine: true, hidden: true},
  {row: 2, col: 2, isMine: true, hidden: true}
]

function startGame () {
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  lib.initBoard()
  for (i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
}

// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (i = 0; i < board.cells.length; i++) {
    if (!board.cells[i].isMine && board.cells[i].hidden) { //If it's not a mine and still hidden, go back to the game
      return
    } if (board.cells[i].isMine && board.cells[i].hidden && !board.cells[i].isMarked) {
      return
    }
  }
  return lib.displayMessage('You win!')
}

//board.cells[i].isMine && !board.cells[i].isMarked

/*Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: */



// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.



function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col) // cell is defined in the parameter above
  var count = 0
  for (j = 0; j < surrounding.length; j++) {
    if (surrounding[j].isMine) {
      count++
    }
  } return count
}
