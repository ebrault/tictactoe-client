'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const logic = require('./logic.js')

const onNewGame = function (event) {
  $('#turn-status').removeClass('hidden')
  $('#win-status').html('')
  logic.playAgain()
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

const onUpdateGame = function (event) {
  logic.click(event)
  event.preventDefault()
  const index = parseInt(event.target.getAttribute('id'))
  const value = store.turn
  const over = logic.gameOver
  api.onUpdateGame(index, value, over)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onNewGame,
  onGetGames,
  onUpdateGame
}
