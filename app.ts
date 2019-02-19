var express = require("express");
var request = require("request");
var app = express();
//Use public directory for CSS files
app.use(express.static(__dirname + "/public"));
//Set View Engine
app.set("view engine", "jade");
var city = "Riverside";
//Backticks because replacing something
//Forecast for one day
//let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=7b39d84acc855216bc1552e6a482bd4e`;
var url =
  "api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&units=imperial&APPID=7b39d84acc855216bc1552e6a482bd4e";
// @ts-ignore
app.get("/", function(req, res) {
  //@ts-ignore
  request(url, function(error, response, body) {
    var weatherJson = JSON.parse(body);
    //console.log(body);
    //console.log(weatherJson);
    // let fiveDay = [];
    // for (let j: number = 1; j < weatherJson.list.length; j++) {
    //   console.log(weatherJson[0].main.temp);
    //   console.log(weatherJson[0].weather[1]);
    //   console.log(weatherJson[0].weather[2]);
    // }
    //Weather object
    var weather = {
      city: city,
      main: weatherJson.weather.main,
      description: weatherJson.weather.description,
      temperature: Math.round(weatherJson.main.temp),
      //dailyForecast: weatherJson.list,
      //description: weatherJson.description,
      icon: weatherJson.weather.icon
    };

    //Dictionary
    var weatherData = { weather: weather /*, daysOfWeek: daysOfWeek*/ };
    //pass dictionary to view engine template
    res.render("weather", weatherData);
  });
});
//console.log("Days: " + startDay + " " + day2 + " " + day3 + " " + day4 + "\n");
//app.listen(process.env.PORT);
app.listen(8000, function() {
  console.log("Server started on Port 8000");
});
