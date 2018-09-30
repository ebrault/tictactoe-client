<<<<<<< HEAD
curl "https://tic-tac-toe-wdi.herokuapp.com/${ID}" \
=======
curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
>>>>>>> JS
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
