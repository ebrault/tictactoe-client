'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onNewGame = function (event) {
  event.preventDefault()
  api.onNewGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.onGetGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}
/*
const onGetOneGame = function (event) {
  event.preventDefault()
  api.getOneGame()
    .then(ui.getOneGameSuccess)
    .catch(ui.getOneGameFailure)
}
const onUpdateGame = function (event) {
  event.preventDefault()
  const index = event.currentTarget.id
  if (!('game' in store)) {
    ui.newGame()
    return
  } else if (store.game.over) {
    ui.newGame()
  }
  const gameBoard = store.gameBoard
  const value = store.turn
  if (gameBoard[index] === '') {
    gameBoard[index] = value
    const win = app.checkForWin(gameBoard)
    if (win[0]) {
      api.onUpdateGame(index, value, true)
        .then(ui.updateGameSuccess)
        .catch(ui.updateGameFailure)
      store.game.over = true
    } else if (win[1] !== '') {
      ui.gameOverWin(win[2])
    } else {
      ui.gameOverDraw()
    }
  } else {
    api.onUpdateGame(index, value)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  }
  else {
    ui.spotTaken()
  }
}
*/
module.exports = {
  onNewGame,
  onGetGames
}
