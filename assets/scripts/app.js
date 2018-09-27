'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('user/events.js')
const gameEvents = require('game/events.js')

$(() => {
  const gameBoard = []
  const newGame = function () {
    const gameBoard = ['', '', '', '', '', '', '', '', '']
    return gameBoard
  }
  const play = function () {
    // Define current PLAYER
    // If Player is Player X
    // Player clicks square
    // onUpdateGame is called
    // Array value associated with square clicked is set to X
    // HTML value of square is set to X
    // Switch player
    // If not player x, player o
    // Player clicks square
    // onUpdateGame is called
    // Array value associated with quare clicked is set to O
    // HTML value of square is set to O
    // Switch player until win/draw conditions met
    const checkWin = function () {
      if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] &&
        gameBoard[0] === gameBoard[2]) {
        return console.log(`Player ${PLAYER} Wins!`)
      } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] &&
        gameBoard[3] === gameBoard[5]) {
        return console.log(`Player ${PLAYER} Wins!`)
      } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] &&
        gameBoard[6] === gameBoard[8]) {
        console.log(`Player ${PLAYER} Wins!`)
      } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] &&
        gameBoard[0] === gameBoard[6]) {
        return console.log(`Player ${PLAYER} Wins!`)
      } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] &&
        gameBoard[1] === gameBoard[7]) {
        return console.log(`Player ${PLAYER} Wins!`)
      } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] &&
        gameBoard[2] === gameBoard[8]) {
        return console.log(`Player ${PLAYER} Wins!`)
      } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] &&
        gameBoard[0] === gameBoard[8]) {
        return console.log(`Player ${PLAYER} Wins!`)
      } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] &&
        gameBoard[2] === gameBoard[6]) {
        return console.log(`Player ${PLAYER} Wins!`)
      }

        const checkDraw = function () {
        // Check for Draws
      }
    }
  }
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#new-game-button').on('click', gameEvents.onNewGame, newGame)
  $('#get-all-games-button').on('click', gameEvents.onGetGames)
  $('#get-one-game-form').on('submit', gameEvents.onGetOneGame)
  $('.update-game').on('click', () => {})
})
