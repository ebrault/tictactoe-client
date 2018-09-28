'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const logic = require('./logic.js')

const onNewGame = function (event) {
  $('.square').html('')
  store.turn = 'x'
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
  console.log(logic.turn)
  event.preventDefault()
  const index = parseInt(event.target.getAttribute('id'))
  console.log(typeof index)
  const value = logic.turn
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
