import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import SearchBar from "./Components/SearchBar/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
    this.setCity = this.setCity.bind(this);
  }

  setCity(arg) {
    //Can't console log after doesn't show up as updated until after
    this.setState({
      city: arg
    });
  }
  render() {
    console.log("State after Passed up: " + this.state.city);
    return (
      <div className="App">
        <header>
          <h1>Dripp</h1>
        </header>
        <SearchBar passUp={this.setCity} />
        <Cards />
      </div>
    );
  }
}

export default App;
