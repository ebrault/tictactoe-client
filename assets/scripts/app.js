'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('user/events.js')
const gameEvents = require('game/events.js')

$(() => {
  $('#sign-up-form').on('submit', () => {})
  $('#sign-in-form').on('submit', () => {})
  $('#sign-out-button').on('click', () => {})
  $('#change-password-form').on('submit', () => {})
  $('#new-game-button').on('click', () => {})
  $('#get-all-games-button').on('click', () => {})
  $('#get-one-game-form').on('submit', () => {})
  $('.update-game').on('click', () => {})
})
