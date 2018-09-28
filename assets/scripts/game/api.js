'use strict'

const config = require('../config.js')
const store = require('../store.js')
const logic = require('./logic')

const onNewGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST'
  })
}

const onGetGames = function () {
  console.log(logic.turn)
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}
/*
const onGetOneGame = function () {
  const gameId = game.id
  return $.ajax({
    url: config.apiUrl + `/games${gameId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}
*/
const onUpdateGame = function (index, value, over) {
  console.log(store.id)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': store.turn
        },
        'over': over
      }
    }
  })
}

module.exports = {
  onNewGame,
  onGetGames,
  onUpdateGame
}
