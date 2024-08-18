import React, { Component } from "react";
import BotsPage from "./containers/BotPage";
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{ textAlign: "center", color: "#4a90e2", margin: "20px 0" }}>
          BOT BATTLR
        </h1>
        <BotsPage />
      </div>
    );
  }
}

export default App;
