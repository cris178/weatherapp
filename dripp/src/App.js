import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import SearchBar from "./Components/SearchBar/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      user: null
    };
    this.setCity = this.setCity.bind(this);
  }

  componentDidUpdate(prevState) {
    if (this.state.city !== prevState.city) {
      if (this.state.city !== "") {
        if (this.state.user === null) {
          const APPID = "7b39d84acc855216bc1552e6a482bd4e";
          let API =
            "http://api.openweathermap.org/data/2.5/forecast?q=" +
            this.state.city +
            "&units=imperial&id=524901&APPID=" +
            APPID;
          console.log(API);

          fetch(API)
            .then(response => response.json())
            .then(responseJson => this.setState({ user: responseJson }));
          console.log("Set API right");
        }
      }
    }
  }

  setCity(arg) {
    //Can't console log after doesn't show up as updated until after
    this.setState({
      city: arg
    });
  }

  render() {
    console.log("State after Passed up: " + this.state.city);
    let local = this.state.city;
    console.log("API: " + local[1]);
    let cityName = this.state.city;
    return (
      <div className="App">
        <header>
          <h1>Dripp</h1>
        </header>
        <SearchBar passUp={this.setCity} />
        <h1>{cityName}</h1>
        <Cards />
      </div>
    );
  }
}

export default App;
