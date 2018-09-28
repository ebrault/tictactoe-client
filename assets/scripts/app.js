'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./user/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password-form').on('submit', userEvents.onChangePassword)
  $('#sign-out-button').on('click', userEvents.onSignOut)
  $('#new-game-button').on('click', gameEvents.onNewGame)
  $('#get-all-games-button').on('click', gameEvents.onGetGames)
  $('#get-one-game-form').on('submit', gameEvents.onGetOneGame)
  /*
  $('#0').on('click', gameEvents.onUpdateGame)
  $('#1').on('click', gameEvents.onUpdateGame)
  $('#2').on('click', gameEvents.onUpdateGame)
  $('#3').on('click', gameEvents.onUpdateGame)
  $('#4').on('click', gameEvents.onUpdateGame)
  $('#5').on('click', gameEvents.onUpdateGame)
  $('#6').on('click', gameEvents.onUpdateGame)
  $('#7').on('click', gameEvents.onUpdateGame)
  $('#8').on('click', gameEvents.onUpdateGame)
  */
})
