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
    .catch(ui.getGamesFailure)
}

const onGetOneGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getOneGame(data)
    .then(ui.getOneGameSuccess)
    .catch(ui.getOneGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onNewGame,
  onGetGames,
  onGetOneGame,
  onUpdateGame
}
