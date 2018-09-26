'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGameFailure)
}

const onGetOneGame = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  api.getOneGame(gameData)
    .then(ui.getOneGameSuccess)
    .catch(ui.getOneGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  api.updateGame(gameData)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onNewGame,
  onGetGames,
  onGetOneGame,
  onUpdateGame
}
