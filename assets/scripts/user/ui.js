'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Sign up successful!')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').removeClass('hidden')
  $('#display-message').show()
  $('#display-message').html('Sign in successful!')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('.square').html('')
  $('#win-status').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#new-game-button').removeClass('hidden')
  $('#play-again-button').removeClass('hidden')
  $('#get-all-games-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
}

const signInFailure = function () {
  $('#display-message').removeClass('hidden')
  $('#display-message').show()
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#display-message').html('Password changed successfully!')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').html('Sign out successful!')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#move-status').addClass('hidden')
  $('#turn-status').addClass('hidden')
  $('#win-status').addClass('hidden')
  $('#tic-tac-toe').addClass('hidden')
  $('#display-games').addClass('hidden')
  $('#get-all-games-button').addClass('hidden')
  $('#new-game-button').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}

const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again!')
  $('#display-message').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
