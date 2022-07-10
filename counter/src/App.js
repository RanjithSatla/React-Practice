import "./App.css";
import NavBar from "./Components/navBar";
import Counters from "./Components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <Counters></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
