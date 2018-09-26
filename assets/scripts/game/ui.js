'use strict'

const store = require('../store.js')

const newGameSuccess = function () {
  $('#display-message').html('New game started!')
  $('#display-message').css('color', 'green')
}

const newGameFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
}

const getGamesSuccess = function (response) {
  $('#displayMessage').html('')
  response.games.forEach(function (games) {
    const gameHTML = (``)
    $('#display-message').append(gameHTML)
  })
}

const getGamesFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
}

const getOneGameSuccess = function (response) {
  $('#display-message').html('')
  const game = response.game
  const gameHTML = (``)
  $('#display-message').append(gameHTML)
}

const getOneGameFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
}

const updateGameSuccess = function (response) {
  $('#display-message').html('Nice move!')
  $('#display-message').css('color', 'green')
  store.game = response.game
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
  getOneGameSuccess,
  getOneGameFailure,
  updateGameSuccess,
  updateGameFailure
}
