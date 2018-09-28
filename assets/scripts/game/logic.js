const store = require('../store.js')

let turn = 'X'
const gameBoard = ['', '', '', '', '', '', '', '', '']
let gameOver = false
console.log(`It is ${turn}s Turn!`)
const click = function (event) {
  const dataSquare = event.target.getAttribute('data-square')
  console.log(dataSquare)
  if (gameOver === true) {
  } else if (gameBoard[dataSquare] === '') {
    $(`#${dataSquare}`).html(`${turn}`)
    gameBoard[dataSquare] = turn
    console.log(gameBoard)
    const statusOfWinnerCheck = checkForWinner()
    if (statusOfWinnerCheck) {
      if (statusOfWinnerCheck === 'draw') {
      } else {
      }
      console.log(turn + ' has won the game!')
      gameOver = true
    }
  }
  if (turn === 'X') {
    turn = 'O'
    console.log(`It is ${turn}'s turn'`)
  } else if (turn === 'O') {
    turn = 'X'
    console.log(`It is ${turn}'s turn`)
  }
}

const checkForWinner = function () {
  if (gameBoard[0] !== '') {
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
      return turn
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
      return turn
    }
  }
  if (gameBoard[4] !== '') {
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      return turn
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      return turn
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
      return turn
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
      return turn
    }
  }
  if (gameBoard[8] !== '') {
    if (gameBoard[8] === gameBoard[5] && gameBoard[5] === gameBoard[2]) {
      return turn
    } else if (gameBoard[8] === gameBoard[7] && gameBoard[7] === gameBoard[6]) {
      return turn
    }
  }
  let isADraw = false
  for (let i = 0; i <= gameBoard.length; i++) {
    if (gameBoard[i] === '') {
      return
    } else if (i === 8) {
      isADraw = true
    }
  } if (isADraw) {
    return console.log('Draw')
  } else {
    return false
  }
}
$('.square').on('click', click)

const storeNewGame = function (data) {
  store.game = data.game
  store.gameBoard = gameBoard
  store.currentTurn = turn
}

module.exports = {
  storeNewGame
}
