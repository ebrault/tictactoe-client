'use strict'

const store = require('../store.js')
const logic = require('./logic.js')

const newGameSuccess = function (response) {
  $('#display-message').html('New game started!')
  $('#display-message').css('color', 'green')
  $('#tic-tac-toe').removeClass('hidden')
  store.id = response.game.id
}

const newGameFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
}

const getGamesSuccess = function (data) {
  $('#display-games').removeClass('hidden')
  $('#display-games').html(`Games Played: ${data.games.length}`)
}

const getGamesFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
}

const updateGameSuccess = function (response) {
  $('#display-message').html('Nice move!')
  $('#display-message').css('color', 'green')
  console.log(logic.gameBoard = response.game.cells)
}

const updateGameFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  getGamesSuccess,
  getGamesFailure,
  updateGameSuccess,
  updateGameFailure
}
