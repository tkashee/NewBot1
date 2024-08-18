# Bot Battlr

**Bot Battlr** is a React-based web application that allows users to build and manage a custom bot army. Users can browse through a list of bots, view detailed information, and enlist bots into their army. The app demonstrates key React concepts such as components, props, state management, event handling, and data fetching.

## Features

- **View Bots**: Browse all available bots in the collection.
- **Enlist Bots**: Add bots to your army by clicking on them. Bots can only be enlisted once and will remain visible in the bot collection.
- **Release Bots**: Remove bots from your army by clicking on them in the army list.
- **Discharge Bots**: Permanently remove bots from both your army and the bot collection by clicking the red "x" button.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/tkashee/Bot Battle.git
   cd bot-battlr
 ## Install Dependencies
 - npm install
 ## Setup the Json Server
- Create a db.json file in the root directory with the provided bot data.
- Start the server: npx json-server --watch db.json --port 8000

## Run the Application
- On your terminal type <npm start> to run the application.
-Open http://localhost:3000 in your browser to use the app.

## Endpoints
GET /bots: Retrieve a list of all bots.
DELETE /bots/
: Permanently remove a bot by its ID.

## Contact Information
For any questions or further information, feel free to reach out:

Name: Enock Langat
Email: enock.langat@student.moringaschool
## License
This project is licensed under the MIT License.

