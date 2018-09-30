Technologies Used:

Apple MacBook Pro
JavaScript
HTML
CSS / SCSS / SASS
Bootstrap

Development Approach
  -The development period lasted from 09/26/2018 until 10/02/2018
  -Day 1: I began developing this application first by working on the communication with the back end. Since we had recently been instructed on how to send requests to a server with JavaScript as JSON objects through CRUD (Create, Read, Update, Delete) methods, I began here. I spent the first day writing cURL scripts to test communication with the back end and built out the skeleton for the application, the events, the API requests, and the UI responses.
  -Day 2: I followed up on this by building the game board using HTML / CSS / SCSS /SASS and bootstrap, and building the game logic in JavaScript.
  -Day 3: I configured the user authorization API requests to work with the HTML user interface, and I worked on getting the game API requests to work. The POST / GET requests for the game were easy enough but connecting the board to send updates back to the server took some doing.
  WEEKEND: At this point, I had a working game application that allowed for sign up, allowed for sign in, allowed for change password, allowed for sign out, allowed for creation of new games, allowed for games to be played through to completion informing the player if a win, or loss had occurred, allowed for graphical representation of game information (i.e. listing games played), prevented players from making moves after the game is over, and allowed for games to be updated on the server side. The game was missing some key functions: it did not allow for consecutive games to be played, it did not display a message if the game is over and there is a draw, and it does not display a message if an invalid move is made. I spent 09/29/2018 troubleshooting the game logic by adding a function which refreshes the game state (creates a new game on the server, clears HTML, and allows for play) which communicated with the server but did not update the game board, allowing consecutive games to be played. This was resolved on the same day. On 9/30/2018 I added graphical representation of draw conditions for the user.
  Day 4:
  Day 5: Presented project to class.

Unsolved problems to be fixed in future iterations: 

Wireframe Images
![Wireframe 1](https://i.imgur.com/2G1QzE9.jpg)
![Wireframe 2](https://i.imgur.com/cObIK97.jpg)
![Wireframe 3](https://i.imgur.com/MXxQesO.jpg)
![Wireframe 4](https://i.imgur.com/MWmtul4.jpg)
![Wireframe 5](https://i.imgur.com/UNGLX8U.jpg)
![Wireframe 6](https://i.imgur.com/bRwHufr.jpg)

User Stories:
- As a user, I want to be able to interact with the game board
 - As a user, I want to be able to create an account
 - As a user, I want to be able to log into my account
 - As a user, I want to be able to play multiple games
 - As a user, I want to be able to start a new game overwriting a game in progress
 - As a user, I want to be able to see all games I have played
 - As a user, I do not want to be able to continue playing once I have won/lost
