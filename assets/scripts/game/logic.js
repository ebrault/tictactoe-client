const store = require('../store.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']
let moveStatus = true
let gameOver = false
const switchUser = function () {
  if (store.turn === 'x') {
    store.turn = 'o'
    console.log(`It is ${store.turn}'s turn'`)
    $('#turn-status').html(`It is ${store.turn}'s turn`)
  } else if (store.turn === 'o') {
    store.turn = 'x'
    console.log(`It is ${store.turn}'s turn`)
    $('#turn-status').html(`It is ${store.turn}'s turn`)
  }
}
console.log(`It is ${store.turn}'s Turn!`)
const click = function (event) {
  const dataSquare = event.target.getAttribute('data-square')
  console.log(dataSquare)
  if (gameOver === true) {
  } else if (gameBoard[dataSquare] === '') {
    $(`#${dataSquare}`).html(`${store.turn}`)
    $('#display-message').removeClass('hidden')
    $('#move-status').addClass('hidden')
    gameBoard[dataSquare] = store.turn
    switchUser()
    console.log('Click', gameBoard)
    const statusOfWinnerCheck = checkForWinner()
    if (statusOfWinnerCheck) {
      if (statusOfWinnerCheck === 'draw') {

      } else {
        console.log(store.turn + ' has won the game!')
        $('#win-status').show()
        $('#win-status').html(`${gameBoard[dataSquare]} has won the game!`)
        $('#turn-status').addClass('hidden')
        gameOver = true
      }
    }
  } else {
    moveStatus = false
    console.log('Invalid move! Please try again!')
    $('#display-message').addClass('hidden')
    $('#move-status').removeClass('hidden')
    $('#move-status').html('Invalid move! Please try again!')
    $('#move-status').css('color', 'red')
  }
}

const checkForWinner = function () {
  if (gameBoard[0] !== '') {
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
      return store.turn
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
      return store.turn
    }
  }
  if (gameBoard[4] !== '') {
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      return store.turn
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      return store.turn
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
      return store.turn
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
      return store.turn
    }
  }
  if (gameBoard[8] !== '') {
    if (gameBoard[8] === gameBoard[5] && gameBoard[5] === gameBoard[2]) {
      return store.turn
    } else if (gameBoard[8] === gameBoard[7] && gameBoard[7] === gameBoard[6]) {
      return store.turn
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
    console.log('Draw')
    $('#win-status').html('Draw')
    $('#turn-status').addClass('hidden')
  } else {
    return false
  }
}

const playAgain = function () {
  gameOver = false
  for (let i = 0; i <= 8; i++) {
    gameBoard[i] = ''
  }
  store.gameBoard = gameBoard
  store.turn = 'x'
  store.over = false
  $('#display-message').show()
  $('#move-status').addClass('hidden')
  $('#turn-status').html(`It is ${store.turn}'s turn!`)
  $('.square').html('')
}

// $('.square').on('click', click)
module.exports = {
  checkForWinner,
  click,
  playAgain
}
