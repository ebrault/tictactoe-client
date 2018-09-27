'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('user/events.js')
const gameEvents = require('game/events.js')

$(() => {
  /*
  const gameBoard = []
  const newGame = function () {
    const gameBoard = ['', '', '', '', '', '', '', '', '']
    return gameBoard
  }
  const play = function (index) {
    let whoseTurn = 'X'
    let gameOver = false
    if (gameOver) {
      return
    }
    if (gameBoard[index] === '') {
      gameBoard[index] = whoseTurn
      const statusOfWinnerCheck = checkForWinner()
      if (statusOfWinnerCheck === 'draw') {
      } else {
      }
      $('#display-message').html(whoseTurn + 'has won the game!')
      gameOver = true
    }
    if (whoseTurn === 'X') {
      whoseTurn = 'O'
      $('#display-message').html(`It is ${whoseTurn}'s Turn!`)
    } else {
      whoseTurn = 'X'
      $('#display-message').html(`It is ${whoseTurn}'s Turn!'`)
    }
    const checkForWinner = function () {
      if (gameBoard[0] !== '') {
        if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
          return whoseTurn
        }
        if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
          return whoseTurn
        }
      }
      if (gameBoard[4] !== '') {
        if (gameBoard[4] === gameBoard[0] && gameBoard[4] === gameBoard[8]) {
          return whoseTurn
        }
        if (gameBoard[4] === gameBoard[2] && gameBoard[4] === gameBoard[6]) {
          return whoseTurn
        }
        if (gameBoard[4] === gameBoard[1] && gameBoard[4] === gameBoard[7]) {
          return (whoseTurn)
        }
        if (gameBoard[4] === gameBoard[3] && gameBoard[4] === gameBoard[5]) {
          return (whoseTurn)
        }
      }
      if (gameBoard[8] !== '') {
        if (gameBoard[8] === gameBoard[7] && gameBoard[8] === gameBoard[6]) {
          return whoseTurn
        }
        if (gameBoard[8] === gameBoard[5] && gameBoard[8] === gameBoard[2]) {
          return whoseTurn
        }
      }
      let isADraw = false
      for (let i = 0; i <= 9; i++) {
        if (gameBoard[i] === false) {
          break
        } else if (i === 9) {
          let isADraw = true
        }
        if (isADraw) {
          return 'Draw!'
        } else {
          return false
        }
        }
      }
    }
    // onUpdateGame is called
    // Array value associated with square clicked is set to X
    // HTML value of square is set to X
    // Switch player
    // If not player x, player o
    // Player clicks square
    // onUpdateGame is called
    // Array value associated with quare clicked is set to O
    // HTML value of square is set to O
  }
  */
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#new-game-button').on('click', gameEvents.onNewGame)
  $('#get-all-games-button').on('click', gameEvents.onGetGames)
  $('#get-one-game-form').on('submit', gameEvents.onGetOneGame)
  $('.update-game').on('click', gameEvents.onUpdateGame)
})
