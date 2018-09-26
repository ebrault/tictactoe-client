'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('user/events.js')
const gameEvents = require('game/events.js')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#new-game-button').on('click', gameEvents.onNewGame)
  $('#get-all-games-button').on('click', gameEvents.onGetGames)
  $('#get-one-game-form').on('submit', gameEvents.onGetOneGame)
  $('.update-game').on('click', () => {})
})
