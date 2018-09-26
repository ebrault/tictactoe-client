'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(() => {})
    .catch(() => {})
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(() => {})
    .catch(() => {})
}

const onGetOneGame = function (event) {
  event.preventDefault()
  api.getOneGame()
    .then(() => {})
    .catch(() => {})
}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.updateGame()
    .then(() => {})
    .catch(() => {})
}

module.exports = {
  onNewGame,
  onGetGames,
  onGetOneGame,
  onUpdateGame
}
