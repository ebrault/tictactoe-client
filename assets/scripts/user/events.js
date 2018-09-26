'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(() => {})
    .catch(() => {})
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(() => {})
    .catch(() => {})
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(() => {})
    .catch(() => {})
}

const onSignOut = function (event) {
  api.signOut()
    .then(() => {})
    .catch(() => {})
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
