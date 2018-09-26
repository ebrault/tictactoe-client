curl "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
  --include \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --request DELETE \

  echo
