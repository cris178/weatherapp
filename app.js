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
var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&APPID=7b39d84acc855216bc1552e6a482bd4e";
// @ts-ignore
app.get("/", function (req, res) {
    //@ts-ignore
    request(url, function (error, response, body) {
        var weatherJson = JSON.parse(body);
        //console.log(weatherJson);
        var fiveDay = [];
        for (var j = 1; j < weatherJson.list.length; j++) {
            console.log(weatherJson[0].main.temp);
            console.log(weatherJson[0].weather[1]);
            console.log(weatherJson[0].weather[2]);
        }
        //Weather object
        var weather = {
            city: city,
            temperature: Math.round(weatherJson.main.temp),
            description: weatherJson.weather[0].description,
            icon: weatherJson.weather[0].icon
        };
        //Weekday Array
        var weekDayArray = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];
        var date = new Date();
        var startDay = 0;
        var day2 = 0;
        var day3 = 0;
        var day4 = 0;
        var day5 = 0;
        var day6 = 0;
        var officialDate = date.toLocaleString("en-US", {
            weekday: "long"
        });
        for (var i = 0; i < weekDayArray.length; i++) {
            if (officialDate === weekDayArray[i]) {
                startDay = i;
                day2 = i + 1;
                day3 = i + 2;
                day4 = i + 3;
                day5 = i + 4;
                day6 = i + 5;
            }
        }
        if (day2 > 6 || day3 > 6 || day4 > 6 || day5 > 6 || day6 > 6) {
            if (day2 > 6)
                day2 = day2 - 7;
            if (day3 > 6)
                day3 = day3 - 7;
            if (day4 > 6)
                day4 = day4 - 7;
            if (day5 > 6)
                day5 = day5 - 7;
            if (day6 > 6)
                day6 = day6 - 7;
        }
        var daysOfWeek = {
            one: weekDayArray[startDay],
            two: weekDayArray[day2],
            three: weekDayArray[day3],
            four: weekDayArray[day4],
            five: weekDayArray[day5],
            six: weekDayArray[day6]
        };
        //Dictionary
        var weatherData = { weather: weather, daysOfWeek: daysOfWeek };
        //pass dictionary to view engine template
        res.render("weather", weatherData);
    });
});
//console.log("Days: " + startDay + " " + day2 + " " + day3 + " " + day4 + "\n");
app.listen(8000, function () {
    console.log("Server started on Port 8000");
});
