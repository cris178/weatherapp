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
      user: [],
      isLoaded: false
    };
    this.setCity = this.setCity.bind(this);
  }

  //Gets called everytime state is changed
  componentDidUpdate(prevState) {
    if (prevState.city !== this.state.city && this.state.isLoaded === false) {
      console.log("Different from prev state");
      if (this.state.city !== "") {
        const APPID = "7b39d84acc855216bc1552e6a482bd4e";
        let API =
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
          this.state.city +
          "&units=imperial&id=524901&APPID=" +
          APPID;
        console.log(API);

        if (this.state.isLoaded === false) {
          //Fetch data from url then get results and convert to json fromat. Get json and set state.
          fetch(API)
            .then(res => res.json())
            .then(json => {
              this.setState({
                isLoaded: true,
                user: json
              });
            });
          //Doesn't show change in this function
          console.log("API is Loaded: " + this.state.isLoaded);
        }
      }
    }
  }

  setCity(arg) {
    //Can't console log after doesn't show up as updated until after
    this.setState({
      city: arg,
      user: [],
      isLoaded: false
    });
  }

  render() {
    console.log("State after Passed up: " + this.state.city);
    console.log("API Set: " + this.state.isLoaded);

    var country = "";
    var user = "";
    let d = "";
    let tempMax = 0;
    let tempMin = 0;
    let humid = 0;
    let press = 0;
    let winds = 0;
    let des = "";

    let d1 = "";
    let tempMax1 = 0;
    let tempMin1 = 0;
    let humid1 = 0;
    let press1 = 0;
    let winds1 = 0;
    let des1 = "";

    let d2 = "";
    let tempMax2 = 0;
    let tempMin2 = 0;
    let humid2 = 0;
    let press2 = 0;
    let winds2 = 0;
    let des2 = "";

    let d3 = "";
    let tempMax3 = 0;
    let tempMin3 = 0;
    let humid3 = 0;
    let press3 = 0;
    let winds3 = 0;
    let des3 = "";

    let d4 = "";
    let tempMax4 = 0;
    let tempMin4 = 0;
    let humid4 = 0;
    let press4 = 0;
    let winds4 = 0;
    let des4 = "";

    if (this.state.isLoaded) {
      user = this.state.user;
      var cityInfo = user.city;
      var listInfo = user.list;
      country = cityInfo.country;
      console.log(country);
      console.log(listInfo);
      //In One day Temp check Every 3 hours meaning 0-7 is one day 8 - 15 is day 2 Total 40 values or 39 in programming
      let i = 0;
      let maxTemp = 0;
      let minTemp = 0;
      var maxTempArr = [];
      var minTempArr = [];
      let humidity = 0;
      let pressure = 0;
      let description = 0;
      let wind = 0;
      var humidityArr = [];
      var pressureArr = [];
      var windArr = [];
      var weatherDescr = [];
      var dateArr = [];

      while (i < 40) {
        if (i === 0) {
          maxTemp = listInfo[0].main.temp_max;
          minTemp = listInfo[0].main.temp_min;
          wind = listInfo[0].wind.speed;
          humidity = listInfo[0].main.humidity;
          pressure = listInfo[0].main.pressure;
          description = i;
        }
        if (humidity < listInfo[i].main.humidity) {
          humidity = listInfo[i].main.humidity;
        }
        if (pressure < listInfo[i].main.pressure) {
          pressure = listInfo[i].main.pressure;
        }
        if (wind < listInfo[i].wind.speed) {
          wind = listInfo[i].wind.speed;
        }
        if (maxTemp < listInfo[i].main.temp_max) {
          maxTemp = listInfo[i].main.temp_max;
          description = i;
        }
        if (minTemp > listInfo[i].main.temp_min) {
          minTemp = listInfo[i].main.temp_min;
        }
        if ((i + 1) % 8 === 0) {
          dateArr.push(listInfo[description].dt_txt);
          weatherDescr.push(listInfo[description].weather[0].description);
          maxTempArr.push(maxTemp);
          minTempArr.push(minTemp);
          humidityArr.push(humidity);
          pressureArr.push(pressure);
          windArr.push(wind);
          maxTemp = 0;
          minTemp = 200;
          humidity = 0;
          pressure = 0;
          wind = 0;
          description = 0;
        }
        i++;
      }
      console.log("Array of Max Temperatures: " + maxTempArr);
      console.log("Array of Min Temperatures: " + minTempArr);
      console.log("Array of wind: " + windArr);
      console.log("Array of humidity: " + humidityArr);
      console.log("Array of pressure: " + pressureArr);
      console.log("Array of description: " + weatherDescr);
      console.log("Array of date: " + dateArr);
      d = dateArr[0];
      tempMax = maxTempArr[0];
      tempMin = minTempArr[0];
      humid = humidityArr[0];
      press = pressureArr[0];
      winds = windArr[0];
      des = weatherDescr[0];

      d1 = dateArr[1];
      tempMax1 = maxTempArr[1];
      tempMin1 = minTempArr[1];
      humid1 = humidityArr[1];
      press1 = pressureArr[1];
      winds1 = windArr[1];
      des1 = weatherDescr[1];

      d2 = dateArr[2];
      tempMax2 = maxTempArr[2];
      tempMin2 = minTempArr[2];
      humid2 = humidityArr[2];
      press2 = pressureArr[2];
      winds2 = windArr[2];
      des2 = weatherDescr[2];

      d3 = dateArr[3];
      tempMax3 = maxTempArr[3];
      tempMin3 = minTempArr[3];
      humid3 = humidityArr[3];
      press3 = pressureArr[3];
      winds3 = windArr[3];
      des3 = weatherDescr[3];

      d4 = dateArr[4];
      tempMax4 = maxTempArr[4];
      tempMin4 = minTempArr[4];
      humid4 = humidityArr[4];
      press4 = pressureArr[4];
      winds4 = windArr[4];
      des4 = weatherDescr[4];
      //listInfo[0].main.temp -> listInfo[7].main.temp is one full day

      //console.log(user);
      //weathList = user.list;
      //console.log(weathList[0].dt);
    }

    return (
      <div className="App">
        <header>
          <h1>Dripp</h1>
        </header>
        <SearchBar passUp={this.setCity} />
        <h1 className="row">{this.state.city}</h1>
        {/*user.map(weather=>(
          <Cards city={weather.cnt}/>
        ))*/}
        <div className="row alignment">
          <Cards
            date={d}
            tempMax={tempMax}
            tempMin={tempMin}
            humid={humid}
            press={press}
            winds={winds}
            des={des}
          />
          <Cards
            date={d1}
            tempMax={tempMax1}
            tempMin={tempMin1}
            humid={humid1}
            press={press1}
            winds={winds1}
            des={des1}
          />
          <Cards
            date={d2}
            tempMax={tempMax2}
            tempMin={tempMin2}
            humid={humid2}
            press={press2}
            winds={winds2}
            des={des2}
          />
          <Cards
            date={d3}
            tempMax={tempMax3}
            tempMin={tempMin3}
            humid={humid3}
            press={press3}
            winds={winds3}
            des={des3}
          />
          <Cards
            date={d4}
            tempMax={tempMax4}
            tempMin={tempMin4}
            humid={humid4}
            press={press4}
            winds={winds4}
            des={des4}
          />
        </div>
      </div>
    );
  }
}

export default App;
