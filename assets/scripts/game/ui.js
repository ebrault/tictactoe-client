'use strict'

const store = require('../store.js')

const newGameSuccess = function () {
  $('#display-message').html('New game started!')
  $('#display-message').css('color', 'green')
  $('.square').html('')
}

const newGameFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
}

const getGamesSuccess = function (response) {
  $('#displayMessage').html('')
  response.games.forEach(function (games) {
    const gameHTML = (`
        <p>ID: ${games.game.id}</p>
        <p>Cells: ${games.game.cells}</p>
        <p>Over: ${games.game.over}</p>
        <p>Player X ID: ${games.game.player_x.id}</p>
        <p>Player X Email: ${games.game.player_x.email}</p>
        <p>Player O ID: ${games.game.player_o.id}</p>
        <p>Player O Email: ${games.game.player_o.email}</p>
      `)
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
  const gameHTML = (`
      <p>ID: ${game.id}</p>
      <p>Cells: ${game.cells}</p>
      <p>Over: ${game.over}</p>
      <p>Player X ID: ${game.player_x.id}</p>
      <p>Player X Email:${game.player_x.email}</p>
      <p>Player O ID: ${game.player_o.id}</p>
      <p>Player O Email: ${game.player_o.email}</p>
    `)
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
