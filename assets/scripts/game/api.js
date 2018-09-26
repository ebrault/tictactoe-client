'use strict'

const config = require('../config.js')
const store = require('../store.js')

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
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

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

const onUpdateGame = function (gameData) {
  const gameId = game.id
  return $.ajax({
    url: config.apiUrl + `games${gameId}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: gameData
  })
}

module.exports = {
  onNewGame,
  onGetGames,
  onGetOneGame,
  onUpdateGame
}
